import Head from 'next/head';
import Link from 'next/link';

import Header from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { Input } from '../../../../components/Input';

import { Container, Content, SignInButton } from './styles';

export default function signinInstitution() {
  return (
    <>
      <Head>
        <title>Login - Instituição | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <form>
            <Input placeholder="E-mail" type="email" />
            <Input placeholder="Senha" type="password" />

            <SignInButton>Entrar</SignInButton>
          </form>

          <div>
            <Link href="/sign/institution/recovery">Esqueci minha senha</Link>

            <Link href="/sign/institution/signup">Não possuo cadastro</Link>
          </div>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
