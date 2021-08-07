import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { Footer } from '~/components/Footer';
import { FormCurator } from '~/components/FormCurator';
import { Header } from '~/components/Header';

import { withSSRAuth } from '~/utils/withSSRAuth';

import { Container, Content } from '~/styles/dashboard/manage/profile';

export default function Profile() {
  const { back } = useRouter();
  const handleSubmit = useCallback(async () =>
    // data: Object
    {
      //
    }, []);

  return (
    <>
      <Head>
        <title>Gerênciar Perfil | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <h1>Editar Perfil</h1>

          <FormCurator isEditing onSubmitForm={handleSubmit} />
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
