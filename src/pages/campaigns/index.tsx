import Head from 'next/head';

import { GetServerSideProps } from 'next';
import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { CampaignItem } from '~/components/cards/CampaignItem';

import { Container, Content, Heading, ListContainer } from '~/styles/campaigns';
import { api } from '~/services/apiClient';

type CampaignData = {
  id: number;
  slug: string;
  title: string;
  tags?: string[];
  logo?: string;
};

type CampaignProps = {
  campaigns: Array<CampaignData>;
};

export default function Campaigns({ campaigns }: CampaignProps) {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/campaigns');
  console.log(response.data.data.data);
  return {
    props: {
      campaigns: response.data.data.data,
    },
  };
};
