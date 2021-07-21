import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { GalleryItem } from '~/components/GalleryItem';

import { useCan } from '~/hooks/useCan';

import { withSSRAuth } from '~/utils/withSSRAuth';
import { roles } from '~/utils/enum';

import {
  Container,
  Content,
  GalleryContainer,
} from '~/styles/dashboard/manage/gallery';

export default function Gallery() {
  const router = useRouter();
  const userCanSeePage = useCan({ role: roles.institution });

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
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem />
            <GalleryItem addNewImage />
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
