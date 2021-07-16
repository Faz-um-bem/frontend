import Head from 'next/head';
import Link from 'next/link';

import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';

import {
  Container,
  Content,
  SignInButton,
  InputContent,
  TextareaContent,
} from './styles';

export default function SignupInstitution() {
  return (
    <>
      <Head>
        <title>Cadastro - Instituição | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <form>
            <h2>Dados de acesso</h2>
            <InputContent placeholder="E-mail" type="email" />
            <InputContent placeholder="Senha" type="password" />
            <InputContent placeholder="Confirmação de senha" type="password" />

            <h2>Dados da instituição</h2>
            <InputContent placeholder="Nome da instituição" type="text" />
            <InputContent placeholder="Razão social" type="text" />
            <InputContent placeholder="CNPJ" type="number" />
            <TextareaContent placeholder="Sobre a instituição" />

            <h2>Endereço</h2>
            <div className="address_name">
              <InputContent placeholder="Endereço" type="text" />
              <InputContent placeholder="Número" type="number" />
            </div>
            <InputContent placeholder="Complemento" type="text" />
            <div className="neighborhood">
              <InputContent placeholder="Bairro" type="text" />
              <InputContent placeholder="CEP" type="number" />
            </div>

            <div className="state">
              <InputContent placeholder="UF" type="text" />
              <InputContent placeholder="Cidade" type="text" />
            </div>

            <h2>Contato</h2>
            <InputContent placeholder="Telefone 1" type="number" />
            <InputContent placeholder="Telefone 2" type="number" />

            <SignInButton>Entrar</SignInButton>
          </form>

          <div>
            <Link href="/sign/institution/signin">Já possuo cadastro</Link>
          </div>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
