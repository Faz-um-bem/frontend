import React from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { Card } from '../../components/Card';

import { Container, Content, Heading, ListContainer } from './styles';
import { Footer } from '../../components/Footer';

export default function campaigns() {
  const router = useRouter();

  const cam = [
    {
      id: '1',
      name: 'Testando 1',
      description:
        'testandooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
    },
    {
      id: '2',
      name: 'Testando 1',
      description:
        'testandooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
    },
    {
      id: '3',
      name: 'Testando 1',
      description:
        'testandooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
    },
    {
      id: '4',
      name: 'Testando 1',
      description:
        'testandooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
    },
  ];

  const handleCampaign = () => {
    router.push(`/campaigns/${'teste'}`);
  };

  return (
    <>
      <Head>
        <title>Campanhas | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <Heading>
            <div>
              <h1>Campanhas de arrecadação</h1>
              <p>
                Veja como você pode contribuir para fazer a diferença em muitas
                vidas.
              </p>
            </div>

            <div>icon</div>
          </Heading>

          <ListContainer>
            {cam.map(c => (
              <Card key={c.id} info={c} />
            ))}
          </ListContainer>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
