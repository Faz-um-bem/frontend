import Head from 'next/head';
import Link from 'next/link';

import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { Input } from '../../../../components/Input';

import { Container, Content, SignInButton } from './styles';

export default function SignupCurator() {
  return (
    <>
      <Head>
        <title>Cadastro - Curador | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <form>
            <h2>Dados de acesso</h2>
            <Input placeholder="E-mail" type="email" />
            <Input placeholder="Senha" type="password" />
            <Input placeholder="Confirmação de senha" type="password" />

            <h2>Dados do usuário</h2>
            <Input placeholder="Nome completo" type="text" />

            <h2>Contato</h2>
            <Input placeholder="Telefone 1" type="number" />
            <Input placeholder="Telefone 2" type="number" />

            <SignInButton>Entrar</SignInButton>
          </form>

          <div>
            <Link href="/sign/curator/signin">Já possuo cadastro</Link>
          </div>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
