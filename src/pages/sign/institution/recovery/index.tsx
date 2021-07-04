import Head from 'next/head';
import Link from 'next/link';

import Header from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { Input } from '../../../../components/Input';

import { Container, Content, SignInButton } from './styles';

export default function recoveryInstitution() {
  return (
    <>
      <Head>
        <title>Recuperar senha - Instituição | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <form>
            <Input placeholder="E-mail" type="email" />

            <SignInButton>Recuperar</SignInButton>
          </form>

          <div>
            <Link href="/sign/institution/signin">Voltar</Link>
          </div>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
