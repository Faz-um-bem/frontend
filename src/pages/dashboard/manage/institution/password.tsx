import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useCallback } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

import { withSSRAuth } from '~/utils/withSSRAuth';

import {
  Container,
  Content,
  InputContent,
  ButtonSubmit,
} from '~/styles/dashboard/manage/institution/password';
import { api } from '~/services/apiClient';
import { useAuth } from '~/hooks/useAuth';

const formSchema = yup.object().shape({
  password: yup
    .string()
    .required('Senha atual é obrigatória')
    .min(6, 'Senha de conter pelo menos 6 caracteres'),
  new_password: yup
    .string()
    .required('Senha nova é obrigatória')
    .min(6, 'Senha de conter pelo menos 6 caracteres'),
  new_password_confirmation: yup
    .string()
    .min(6, 'A senha deve possuir 6 digitos')
    .required('Confirmação de senha é obrigatório')
    .oneOf([yup.ref('new_password'), null], 'As senhas novas devem ser iguais'),
});

type PasswordData = {
  password: string;
  new_password: string;
  new_password_confirmation: string;
};

export default function Password() {
  const { user } = useAuth();
  const { register, handleSubmit, formState, isSubmitting } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { errors } = formState;

  const handleSubmitForm: SubmitHandler<PasswordData> = useCallback(
    async (data, event) => {
      event.preventDefault();

      try {
        const response = await api.put(`/password/${user.id}`, {
          type: 'institution',
          ...data,
        });

        toast.success(response.data.data);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
    [user.id],
  );

  return (
    <>
      <Head>
        <title>Gerenciar senha | Faz um bem!</title>
      </Head>

      <Container>
        <Header />

        <Content>
          <h1>Editar senha</h1>

          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <InputContent
              name="password"
              placeholder="Senha atual"
              type="password"
              error={errors.password}
              {...register('password')}
            />

            <InputContent
              name="new_password"
              placeholder="Nova senha"
              type="password"
              error={errors.new_password}
              {...register('new_password')}
            />

            <InputContent
              name="new_password_confirmation"
              placeholder="Confirmação da nova senha"
              type="password"
              error={errors.new_password_confirmation}
              {...register('new_password_confirmation')}
            />
            <ButtonSubmit type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Aguarde...' : 'Alterar'}
            </ButtonSubmit>
          </form>
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
