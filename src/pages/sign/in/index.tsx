import { useCallback } from 'react';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useRouter } from 'next/router';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Input } from '../../../components/Input';

import { useAuth } from '../../../hooks/AuthContext';

import { Container, Content, SignInButton } from './styles';
import { roles } from '../../../util/enum';

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
  const { push, query, back } = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { errors } = formState;

  const handleLogin: SubmitHandler<FormData> = useCallback(
    async (data, event) => {
      event.preventDefault();
      await new Promise(resolve => setTimeout(resolve, 3000));

      signIn({ email: 'wederson@example', password: 'password' });
    },
    [],
  );

  const handleSignUp = useCallback(() => {
    push({
      pathname: '/sign/up',
      query: { role: query.role },
    });
  }, []);

  const handleRecovery = useCallback(() => {
    push({
      pathname: '/sign/recovery',
    });
  }, []);

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
              {...register('email')}
            />
            <Input
              name="password"
              placeholder="Senha"
              type="password"
              error={errors.password}
              {...register('password')}
            />

            <SignInButton type="submit">Entrar</SignInButton>
          </form>

          <div>
            <button type="button" onClick={handleRecovery}>
              Esqueci minha senha
            </button>

            <button type="button" onClick={handleSignUp}>
              Não possuo cadastro
            </button>
          </div>

          <div className="back">
            <button type="button" onClick={back}>
              Voltar
            </button>
          </div>
        </Content>

        <Footer />
      </Container>
    </>
  );
}
