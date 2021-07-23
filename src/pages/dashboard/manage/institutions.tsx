import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { CardListItem } from '~/components/CardListItem';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

import { withSSRAuth } from '~/utils/withSSRAuth';

import {
  Container,
  CampaignList,
  Content,
} from '~/styles/dashboard/manage/institutions';

export default function ManageInstitutions() {
  return (
    <>
      <Head>
        <title>Gerênciar Instituições | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <h1>Gerênciar Instituições</h1>

          <CampaignList>
            {/* <CardListItem
              title="teste1"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <CardListItem
              title="teste2"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <CardListItem
              title="teste3"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="draft"
            />
            <CardListItem
              title="teste4"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="refused"
            />
            <CardListItem
              title="teste234131"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <CardListItem
              title="teste1"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <CardListItem
              title="teste1"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="draft"
            /> */}
          </CampaignList>
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
