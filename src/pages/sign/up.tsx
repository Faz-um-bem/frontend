import { useCallback } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { FormInstitution } from '~/components/FormInstitution';
import { FormCurator } from '~/components/FormCurator';

import { roles } from '~/utils/enum';
import { withSSRGuest } from '~/utils/withSSRGuest';

import { Container, Content } from '~/styles/sign/up';

// type SubmitData = {
//   email: string;
//   password: string;
//   confirm_password: string;
//   name: string;
//   reason_social?: string;
//   cnpj?: number;
//   description?: string;
//   address?: string;
//   address_number?: string;
//   address_complement?: string;
//   neighborhood?: string;
//   cep?: number;
//   uf?: string;
//   city?: string;
//   phone?: number;
//   phone_secondary?: number;
// };

export default function SignUp() {
  const { query, push } = useRouter();

  const handleSubmit = useCallback(async () =>
    // data: SubmitData
    {}, []);

  const handleSignIn = useCallback(() => {
    push({
      pathname: '/sign/in',
      query: { role: query.role },
    });
  }, [push, query.role]);

  return (
    <>
      <Head>
        <title>
          Cadastro -{' '}
          {query.role === String(roles.institution) ? 'Instituição' : 'Curador'}{' '}
          | Faz um bem!
        </title>
      </Head>

      <Container>
        <Header />

        <Content>
          {query.role === String(roles.institution) ? (
            <FormInstitution onSubmitForm={handleSubmit} />
          ) : (
            <FormCurator onSubmitForm={handleSubmit} />
          )}

          <div>
            <button type="button" onClick={handleSignIn}>
              Já possuo cadastro
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