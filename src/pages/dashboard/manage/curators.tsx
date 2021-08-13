import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { ListItem } from '~/components/cards/ListItem';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import { useCan } from '~/hooks/useCan';
import { permissions } from '~/utils/enum';

import { withSSRAuth } from '~/utils/withSSRAuth';

import {
  Container,
  CampaignList,
  Content,
} from '~/styles/dashboard/manage/curators';

export default function ManageInstitutions() {
  const router = useRouter();
  const userCanSeePage = useCan({ permission: permissions.administrator });

  useEffect(() => {
    if (!userCanSeePage) {
      router.push('/error');
    }
  }, [userCanSeePage, router]);

  return (
    <>
      <Head>
        <title>Gerênciar Curadores | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <h1>Gerênciar Curadores</h1>

          <CampaignList>
            {/* <ListItem title="Joao Alves" />
            <ListItem title="Maria Clara Fernandes" />
            <ListItem title="Joana da Silva" />
            <ListItem title="Fernando Ferreira" />
            <ListItem title="Maiara de Morais" />
            <ListItem title="Pedro de Andrade" />
            <ListItem title="Josué" /> */}
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
