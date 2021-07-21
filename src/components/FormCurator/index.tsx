import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '~/components/Input';

import { Container, SignInButton } from './styles';

type FormData = {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
};

type FormCuratorProps = {
  onSubmitForm(data: FormData): Promise<void>; // eslint-disable-line
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
  confirm_password: yup
    .string()
    .min(6, 'A senha deve possuir 6 digitos')
    .required('Confirmação de senha é obrigatório')
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
  name: yup.string().required('Nome é obrigatório'),
});

export function FormCurator({ onSubmitForm }: FormCuratorProps) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { errors } = formState;

  const handleSubmitForm: SubmitHandler<FormData> = useCallback(
    async (data, event) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      event.preventDefault();
      onSubmitForm(data);
    },
    [onSubmitForm],
  );

  return (
    <Container onSubmit={handleSubmit(handleSubmitForm)}>
      <h2>Dados de acesso</h2>
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
      <Input
        name="confirm_password"
        placeholder="Confirmação de senha"
        type="password"
        error={errors.confirm_password}
        {...register('confirm_password')}
      />

      <h2>Dados do usuário</h2>
      <Input
        name="name"
        placeholder="Nome completo"
        type="text"
        error={errors.name}
        {...register('name')}
      />

      <SignInButton type="submit">Cadastrar</SignInButton>
    </Container>
  );
}
