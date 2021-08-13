import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { ListItem } from '~/components/cards/ListItem';
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
            {/* <ListItem
              title="teste1"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <ListItem
              title="teste2"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <ListItem
              title="teste3"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="draft"
            />
            <ListItem
              title="teste4"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="refused"
            />
            <ListItem
              title="teste234131"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <ListItem
              title="teste1"
              description="HFUSDAGHASDUIFHGUISDAHFGIUDASHSIAUDHFIUASHGIUSADHFIUGHSADIUFHGIUSADHFUGSADHIFHGSUAIDHFSIA"
              status="active"
            />
            <ListItem
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
