import { useEffect, useState, ChangeEvent } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
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

type ImagesData = {
  id: number;
  url: string;
};

export default function Gallery() {
  const router = useRouter();
  const userCanSeePage = useCan({ role: roles.institution });

  const [preview, setPreview] = useState<File[]>([]);
  const [images, setImages] = useState<ImagesData[]>([]);

  const handleSelectImages = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedImages = Array.from(event.target.files);

    setPreview(selectedImages);
  };

  useEffect(() => {
    if (!userCanSeePage) {
      router.push('/error');
    }
  }, [router, userCanSeePage]);
  return (
    <>
      <Head>
        <title>Gerênciar Galeria | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <h1>Galeria de fotos</h1>

          <GalleryContainer>
            {images.map(image => (
              <GalleryItem key={image.id} url={image.url} />
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
