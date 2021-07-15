import Head from 'next/head';

import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';

import { Container, Content, GalleryContainer } from './styled';
import { GalleryItem } from './GalleryItem';

export default function Gallery() {
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
