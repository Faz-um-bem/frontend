import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Header from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';

import {
  Container,
  Content,
  Heading,
  MapContainer,
  ListContainer,
} from './styles';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

export default function Institutions() {
  const inst = [
    {
      id: `1`,
      name: 'testando 123',
      slug: 'teste-123',
      location: {
        latitude: -29.6987317,
        longitude: -53.8780534,
      },
    },
    {
      id: `2`,
      name: 'testando 3333',
      slug: 'teste-3333',
      location: {
        latitude: -29.7063996,
        longitude: -53.818438,
      },
    },
  ];

  const init = {
    latitude: -29.6987317,
    longitude: -53.8780534,
  };

  return (
    <>
      <Head>
        <title>Instituições | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <Heading>
            <div>
              <h1>Instituições cadastradas</h1>
              <p>Elas levam o seu ato a quem precisa!</p>
            </div>

            <div>icon</div>
          </Heading>

          <MapContainer>
            <Map initialLocation={init} places={inst} />
          </MapContainer>

          <ListContainer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ListContainer>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
