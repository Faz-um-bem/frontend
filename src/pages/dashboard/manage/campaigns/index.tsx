import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { CardListItem } from '../../../../components/CardListItem';
import { Footer } from '../../../../components/Footer';
import { Header } from '../../../../components/Header';

import { withSSRAuth } from '../../../../utils/withSSRAuth';

import { Container, CampaignList, Content } from './styled';

export default function ManageCampaign() {
  return (
    <>
      <Head>
        <title>Gerênciar Campanhas | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <h1>Gerênciar Campanhas</h1>

          <CampaignList>
            <CardListItem
              title="teste1"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <CardListItem
              title="teste2"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="draft"
            />
            <CardListItem
              title="teste3"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <CardListItem
              title="teste4"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <CardListItem
              title="teste5"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
          </CampaignList>
        </Content>

        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {},
  };
});
