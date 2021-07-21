import { useCallback } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Input } from '../../../components/Input';

import { withSSRGuest } from '../../../utils/withSSRGuest';

import { Container, Content, SignInButton } from './styles';

export default function RecoveryInstitution() {
  const { back } = useRouter();

  const handleSubmit = useCallback(() => {}, []);

  return (
    <>
      <Head>
        <title>Recuperar senha - Instituição | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <form onSubmit={() => {}}>
            <Input name="email" placeholder="E-mail" type="email" />

            <SignInButton onClick={handleSubmit}>Recuperar</SignInButton>
          </form>

          <div>
            <button type="button" onClick={back}>
              Voltar
            </button>
          </div>
        </Content>

        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(async () => {
  return {
    props: {},
  };
});
