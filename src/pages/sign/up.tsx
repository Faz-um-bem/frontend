import { useCallback } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { FormInstitution } from '~/components/forms/FormInstitution';
import { FormCurator } from '~/components/forms/FormCurator';

import { roles } from '~/utils/enum';
import { withSSRGuest } from '~/utils/withSSRGuest';

import { Container, Content } from '~/styles/sign/up';
import { useAuth } from '~/hooks/useAuth';

type SubmitData = {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
  corporate_name?: string;
  cnpj?: string;
  description?: string;
  address?: string;
  address_number?: string;
  address_complement?: string;
  neighborhood?: string;
  postal_code?: string;
  state?: string;
  city?: string;
  main_phone?: string;
  secondary_phone?: string;
};

export default function SignUp() {
  const { query, push } = useRouter();
  const { signUp, signUpCurator } = useAuth();

  const handleSubmit = useCallback(
    async (data: SubmitData) => {
      if (query.role === String(roles.institution)) {
        await signUp(data);
      } else {
        await signUpCurator(data);
      }
    },
    [signUp],
  );

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
