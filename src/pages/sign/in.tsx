import { useCallback } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FiLock, FiMail } from 'react-icons/fi';

import { useAuth } from '~/hooks/useAuth';

import { Header } from '~/components/Header';
import { Footer } from '~/components/Footer';
import { Input } from '~/components/forms/Input';

import { roles } from '~/utils/enum';
import { withSSRGuest } from '~/utils/withSSRGuest';

import { Container, Content, SignInButton } from '~/styles/sign/in';

type FormData = {
  email: string;
  password: string;
};

const formSchema = yup.object().shape({
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('O e-mail precisa ser válido'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'Senha de conter pelo menos 6 caracteres'),
});

export default function SigninInstitution() {
  const { signIn } = useAuth();
  const { push, query } = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { errors, isSubmitting } = formState;

  const handleLogin: SubmitHandler<FormData> = useCallback(
    async (data, event) => {
      event.preventDefault();
      await new Promise(resolve => setTimeout(resolve, 3000));

      signIn({
        email: data.email,
        password: data.password,
        type: 'institution',
      });
    },
    [signIn],
  );

  const handleSignUp = useCallback(() => {
    push({
      pathname: '/sign/up',
      query: { role: query.role },
    });
  }, [push, query.role]);

  const handleRecovery = useCallback(() => {
    push({
      pathname: '/sign/recovery',
    });
  }, [push]);

  return (
    <>
      <Head>
        <title>
          Login -{' '}
          {query.role === String(roles.institution) ? 'Instituição' : 'Curador'}{' '}
          | Faz um bem!
        </title>
      </Head>

      <Container>
        <Header />

        <Content>
          <form onSubmit={handleSubmit(handleLogin)}>
            <Input
              name="email"
              placeholder="E-mail"
              type="email"
              error={errors.email}
              icon={FiMail}
              {...register('email')}
            />
            <Input
              name="password"
              placeholder="Senha"
              type="password"
              error={errors.password}
              icon={FiLock}
              {...register('password')}
            />

            <SignInButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Aguarde...' : 'Entrar'}
            </SignInButton>
          </form>

          <div>
            <button
              type="button"
              onClick={handleRecovery}
              disabled={isSubmitting}
            >
              Esqueci minha senha
            </button>

            <button
              type="button"
              onClick={handleSignUp}
              disabled={isSubmitting}
            >
              Não possuo cadastro
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
