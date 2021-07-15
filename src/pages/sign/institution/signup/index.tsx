import Head from 'next/head';
import Link from 'next/link';

import { Header } from '../../../../components/Header';
import { Footer } from '../../../../components/Footer';
import { Input } from '../../../../components/Input';
import { Textarea } from '../../../../components/Textarea';

import { Container, Content, SignInButton } from './styles';

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
            <Input placeholder="E-mail" type="email" />
            <Input placeholder="Senha" type="password" />
            <Input placeholder="Confirmação de senha" type="password" />

            <h2>Dados da instituição</h2>
            <Input placeholder="Nome da instituição" type="text" />
            <Input placeholder="Razão social" type="text" />
            <Input placeholder="CNPJ" type="number" />
            <Textarea placeholder="Sobre a instituição" />

            <h2>Endereço</h2>
            <Input placeholder="Endereço" type="text" />
            <Input placeholder="Complemento" type="text" />
            <div className="neighborhood">
              <Input placeholder="Bairro" type="text" />
              <Input placeholder="CEP" type="number" />
            </div>

            <div className="state">
              <Input placeholder="UF" type="text" />
              <Input placeholder="Cidade" type="text" />
            </div>

            <h2>Contato</h2>
            <Input placeholder="Telefone 1" type="number" />
            <Input placeholder="Telefone 2" type="number" />

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
