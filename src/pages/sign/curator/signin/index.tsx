import Head from 'next/head';
import Link from 'next/link';

import Header from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { Input } from '../../../../components/Input';

import { Container, Content, SignInButton } from './styles';

export default function SigninCurator() {
  return (
    <>
      <Head>
        <title>Login - Curador | Faz um bem!</title>
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
            <Link href="/sign/curator/recovery">Esqueci minha senha</Link>

            <Link href="/sign/curator/signup">Não possuo cadastro</Link>
          </div>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
