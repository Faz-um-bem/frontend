import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Container,
  SignInButton,
  InputContent,
  TextareaContent,
} from './styles';

type FormData = {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
  reason_social: string;
  cnpj: number;
  description: string;
  address: string;
  address_number: string;
  address_complement: string;
  neighborhood: string;
  cep: number;
  uf: string;
  city: string;
  phone: number;
  phone_secondary: number;
};

type FormInstitutionProps = {
  onSubmitForm(data: FormData): Promise<void>;
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
  reason_social: yup.string().required('Razão social é obrigatório'),
  cnpj: yup.number().required('CNPJ obrigatório').min(14, 'CPNJ inválido'),
  description: yup.string().required('Descrição obrigatória'),
  address: yup.string().required('Endereço obrigatório'),
  address_number: yup.number().required('Número do endereço é obrigatório'),
  address_complement: yup.string().required('Complemento é obrigatório'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  cep: yup.number().required('CEP é obrigatório').min(8, 'CEP inválido'),
  uf: yup.string().required('Unidade Federativa é obrigatório'),
  city: yup.string().required('Cidade é obrigatório'),
  phone: yup
    .number()
    .required('Número de telefone obrigatório')
    .min(11, 'Deve conter 11 dígitos'),
  // phone_secondary: yup.number().min(11, 'Deve conter 11 dígitos'),
});

export function FormInstitution({ onSubmitForm }: FormInstitutionProps) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { errors } = formState;

  const handleSubmitForm: SubmitHandler<FormData> = useCallback(
    async (data, event) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      event.preventDefault();
      // onSubmitForm(data);
    },
    [],
  );

  return (
    <Container onSubmit={handleSubmit(handleSubmitForm)}>
      <h2>Dados de acesso</h2>
      <InputContent
        name="email"
        placeholder="E-mail"
        type="email"
        error={errors.email}
        {...register('email')}
      />
      <InputContent
        name="password"
        placeholder="Senha"
        type="password"
        error={errors.password}
        {...register('password')}
      />
      <InputContent
        name="confirm_password"
        placeholder="Confirmação de senha"
        type="password"
        error={errors.confirm_password}
        {...register('confirm_password')}
      />

      <h2>Dados da instituição</h2>
      <InputContent
        name="name"
        placeholder="Nome da instituição"
        type="text"
        error={errors.name}
        {...register('name')}
      />
      <InputContent
        name="reason_social"
        placeholder="Razão social"
        type="text"
        error={errors.reason_social}
        {...register('reason_social')}
      />
      <InputContent
        name="cnpj"
        placeholder="CNPJ"
        type="number"
        error={errors.cnpj}
        {...register('cnpj')}
      />
      <TextareaContent
        name="description"
        placeholder="Sobre a instituição"
        error={errors.description}
        {...register('description')}
      />

      <h2>Endereço</h2>
      <div className="address_name">
        <InputContent
          name="address"
          placeholder="Endereço"
          type="text"
          error={errors.address}
          {...register('address')}
        />
        <InputContent
          name="address_number"
          placeholder="Número"
          type="number"
          error={errors.address_number}
          {...register('address_number')}
        />
      </div>
      <InputContent
        name="address_complement"
        placeholder="Complemento"
        type="text"
        error={errors.address_complement}
        {...register('address_complement')}
      />
      <div className="neighborhood">
        <InputContent
          name="neighborhood"
          placeholder="Bairro"
          type="text"
          error={errors.neighborhood}
          {...register('neighborhood')}
        />
        <InputContent
          name="cep"
          placeholder="CEP"
          type="number"
          error={errors.cep}
          {...register('cep')}
        />
      </div>

      <div className="state">
        <InputContent
          name="uf"
          placeholder="UF"
          type="text"
          error={errors.uf}
          {...register('uf')}
        />
        <InputContent
          name="city"
          placeholder="Cidade"
          type="text"
          error={errors.city}
          {...register('city')}
        />
      </div>

      <h2>Contato</h2>
      <InputContent
        name="phone"
        placeholder="Telefone 1"
        type="number"
        error={errors.phone}
        {...register('phone')}
      />
      <InputContent
        name="phone_secondary"
        placeholder="Telefone 2"
        type="number"
        error={errors.phone_secondary}
        {...register('phone_secondary')}
      />

      <SignInButton type="submit">
        {formState.isSubmitting ? 'Aguarde...' : 'Entrar'}
      </SignInButton>
    </Container>
  );
}
