import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useCallback } from 'react';

import { Footer } from '~/components/Footer';
import { FormInstitution } from '~/components/forms/FormInstitution';
import { Header } from '~/components/Header';

import { withSSRAuth } from '~/utils/withSSRAuth';

import {
  Container,
  Content,
} from '~/styles/dashboard/manage/institution/profile';

export default function Profile() {
  const handleSubmit = useCallback(async () =>
    // data: Object
    {
      //
    }, []);

  return (
    <>
      <Head>
        <title>Gerenciar Perfil | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <h1>Editar Perfil</h1>

          <FormInstitution isEditing onSubmitForm={handleSubmit} />
        </Content>
        <Footer />
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
