import Head from 'next/head';

import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { CampaignItem } from '~/components/cards/CampaignItem';

import { Container, Content, Heading, ListContainer } from '~/styles/campaigns';

export default function Ccampaigns() {
  const campaigns = [
    {
      id: '1',
      image:
        'https://www.anoregsp.org.br/__Documentos/Upload_Conteudo/destaques/60133/destaque.jpg',
      title: 'Testando 1',
      tags: ['Dinheiro', 'Comida'],
      institution: {
        name: 'Teste',
      },
    },
    {
      id: '2',
      image:
        'https://acontecendoaqui.com.br/sites/default/files/materia_acontecendo_aqui.jpg',
      title: 'Testando 2',
      tags: ['Dinheiro', 'Comida'],
      institution: {
        name: 'Teste',
      },
    },
    {
      id: '3',
      image: 'https://fapto.org.br/images/noticia/A5fcfc59fa079b.jpg',
      title: 'Testando 3',
      tags: ['teste', 'Comida'],
      institution: {
        name: 'Teste',
      },
    },
    {
      id: '4',
      image:
        'https://www.anoregsp.org.br/__Documentos/Upload_Conteudo/destaques/60133/destaque.jpg',
      title: 'Testando 4',
      tags: ['Dinheiro', 'teste'],
      institution: {
        name: 'Teste',
      },
    },
    {
      id: '5',
      image:
        'https://acontecendoaqui.com.br/sites/default/files/materia_acontecendo_aqui.jpg',
      title: 'Testando 5',
      tags: ['Dinheiro', 'Comida'],
      institution: {
        name: 'Teste',
      },
    },
  ];

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
            {campaigns.map(campaign => (
              <CampaignItem key={campaign.id} campaign={campaign} />
            ))}
          </ListContainer>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
