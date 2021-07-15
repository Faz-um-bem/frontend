import Head from 'next/head';
import { CardListItem } from '../../../../components/CardListItem';

import { Footer } from '../../../../components/Footer';
import Header from '../../../../components/Header';

import { Container, CampaignList, Content } from './styled';

export default function ManageInstitutions() {
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
            <CardListItem title="Joao Alves" />
            <CardListItem title="Maria Clara Fernandes" />
            <CardListItem title="Joana da Silva" />
            <CardListItem title="Fernando Ferreira" />
            <CardListItem title="Maiara de Morais" />
            <CardListItem title="Pedro de Andrade" />
            <CardListItem title="Josué" />
          </CampaignList>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
