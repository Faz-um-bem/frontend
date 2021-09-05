import { useEffect, useState, ChangeEvent } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useCallback } from 'react';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { GalleryItem } from '~/components/cards/GalleryItem';

import { useCan } from '~/hooks/useCan';

import { withSSRAuth } from '~/utils/withSSRAuth';
import { roles } from '~/utils/enum';

import {
  Container,
  Content,
  GalleryContainer,
} from '~/styles/dashboard/manage/gallery';
import { convertToBase64 } from '~/utils/convert';
import { api } from '~/services/apiClient';
import { useAuth } from '~/hooks/useAuth';

type ImagesData = {
  id: number;
  url: string;
};

export default function Gallery() {
  const router = useRouter();
  const { user } = useAuth();
  const userCanSeePage = useCan({ role: roles.institution });

  const [images, setImages] = useState<ImagesData[]>([]);

  const handleSelectImages = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      if (!event.target) return;
      const imageBase64 = await convertToBase64(event.target.files[0]);
      const { name, size, type } = event.target.files[0];

      const response = await api.post(`/institutions/${user.id}/photos`, {
        photo: {
          name,
          size,
          type,
          value: imageBase64.base64,
        },
      });

      setImages([...images, response.data.data]);
      toast.success('Imagem adicionada na galeria');
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const loadImages = useCallback(async () => {
    try {
      const response = await api.get(`/institutions/${user.id}/photos`);

      setImages(response.data.data.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }, [user.id]);

  const deletePhoto = useCallback(
    async (id: number) => {
      try {
        await api.delete(`/institutions/${user.id}/photos/${id}`);

        const attImages = images.filter(i => i.id !== id);
        setImages(attImages);

        toast.success('Imagem foi removida da galeria');
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
    [images, user.id],
  );

  useEffect(() => {
    if (!userCanSeePage) {
      router.push('/error');
    } else {
      loadImages();
    }
  }, [router, userCanSeePage, loadImages]);
  return (
    <>
      <Head>
        <title>Gerenciar Galeria | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <h1>Galeria de fotos</h1>

          <GalleryContainer>
            {images.map(image => (
              <GalleryItem
                key={image.id}
                url={image.url}
                id={image.id}
                onDelete={deletePhoto}
              />
            ))}
            <GalleryItem addNewImage onSelectImages={handleSelectImages} />
          </GalleryContainer>
        </Content>

        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
