import { useCallback } from 'react';
import dynamic from 'next/dynamic';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useState } from 'react';
import router from 'next/router';
import { useEffect } from 'react';
import {
  Container,
  SignInButton,
  InputContent,
  TextareaContent,
  MapContainer,
  // SelectContent,
} from './styles';
import { useAuth } from '~/hooks/useAuth';
// import apiIBGE from '~/services/apiIBGE';

const SelectMap = dynamic(() => import('~/components/maps/SelectMap'), {
  ssr: false,
});

type SubmitData = {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
  corporate_name: string;
  cnpj: string;
  description: string;
  address: string;
  address_number: string;
  address_complement: string;
  neighborhood: string;
  postal_code: string;
  state: string;
  city: string;
  main_phone: string;
  secondary_phone: string;
  whatsapp_phone: string;
};

type FormInstitutionProps = {
  onSubmitForm(data: SubmitData): Promise<void>;
  isEditing?: boolean;
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
  password_confirmation: yup
    .string()
    .min(6, 'A senha deve possuir 6 digitos')
    .required('Confirmação de senha é obrigatório')
    .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
  name: yup.string().required('Nome é obrigatório'),
  corporate_name: yup.string().required('Razão social é obrigatório'),
  cnpj: yup.number().required('CNPJ obrigatório').min(14, 'CPNJ inválido'),
  description: yup.string().required('Descrição obrigatória'),
  address: yup.string().required('Endereço obrigatório'),
  address_number: yup.number().required('Número do endereço é obrigatório'),
  address_complement: yup.string().required('Complemento é obrigatório'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  postal_code: yup
    .number()
    .required('CEP é obrigatório')
    .min(8, 'CEP inválido'),
  // state: yup.string().required('Unidade Federativa é obrigatório'),
  // city: yup.string().required('Cidade é obrigatório'),
  main_phone: yup
    .number()
    .required('Número de telefone obrigatório')
    .min(11, 'Deve conter 11 dígitos'),
  // phone_secondary: yup.number().min(11, 'Deve conter 11 dígitos'),
});

export function FormInstitution({
  onSubmitForm,
  isEditing = false,
}: FormInstitutionProps) {
  const { user } = useAuth();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: user || {
      email: '',
      password: '',
      password_confirmation: '',
      name: '',
      corporate_name: '',
      cnpj: '',
      description: '',
      address: '',
      address_number: '',
      address_complement: '',
      neighborhood: '',
      postal_code: '',
      state: '',
      city: '',
      main_phone: '',
      secondary_phone: '',
      whatsapp_phone: '',
    },
  });
  const { errors } = formState;

  const [position, setPosition] = useState(null);
  // const [currentUf, setCurrentUf] = useState('');
  // const [ufs, setUfs] = useState([]);
  // const [cities, setCities] = useState([]);

  const handlePosition = () => {
    setPosition({
      lat: Number(user.address_latitude),
      lng: Number(user.address_longitude),
    });
  };

  // const loadUFs = useCallback(async () => {
  //   const response = await apiIBGE.get('/estados');
  //   const attUfs = response.data.map(uf => uf.sigla);

  //   setUfs(attUfs);
  // }, []);

  // const loadCities = useCallback(async uf => {
  //   const response = await apiIBGE.get(`/estados/${uf}/municipios`);
  //   const attCities = response.data.map(city => city.sigla);

  //   setCities(attCities);
  // }, []);

  useEffect(() => {
    if (user) {
      handlePosition();
    }
  }, []);

  // useEffect(() => {
  //   loadUFs();
  // }, []);

  // useEffect(() => {
  //   loadCities(currentUf);
  // }, [currentUf]);

  const handleSubmitForm: SubmitHandler<SubmitData> = useCallback(
    async (data, event) => {
      event.preventDefault();

      if (!position) {
        router.push('#map');
        return;
      }

      const formattedData = {
        ...data,
        address_number: String(data.address_number),
        cnpj: String(data.cnpj),
        main_phone: String(data.main_phone),
        postal_code: String(data.postal_code),
        secondary_phone: String(data.secondary_phone),
        address_latitude: String(position?.lat),
        address_longitude: String(position?.lng),
      };

      onSubmitForm(formattedData);
    },
    [onSubmitForm],
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
      {!isEditing && (
        <>
          <InputContent
            name="password"
            placeholder="Senha"
            type="password"
            error={errors.password}
            {...register('password')}
          />
          <InputContent
            name="password_confirmation"
            placeholder="Confirmação de senha"
            type="password"
            error={errors.password_confirmation}
            {...register('password_confirmation')}
          />
        </>
      )}

      <h2>Dados da instituição</h2>
      <InputContent
        name="name"
        placeholder="Nome da instituição"
        type="text"
        error={errors.name}
        {...register('name')}
      />
      <InputContent
        name="corporate_name"
        placeholder="Razão social"
        type="text"
        error={errors.corporate_name}
        {...register('corporate_name')}
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

      <h2 id="map">Endereço</h2>
      {!position && (
        <h3 style={{ color: '#f44' }}>
          Você precisa selecionar o local no mapa.
        </h3>
      )}
      <MapContainer>
        <SelectMap
          interactive={!isEditing}
          markerPosition={position}
          center={position}
          onChangeMakerPosition={setPosition}
        />
      </MapContainer>
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
          name="postal_code"
          placeholder="CEP"
          type="number"
          error={errors.postal_code}
          {...register('postal_code')}
        />
      </div>

      <div className="state">
        <InputContent
          name="state"
          placeholder="UF"
          type="text"
          error={errors.state}
          {...register('state')}
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
        name="main_phone"
        placeholder="Telefone 1"
        type="number"
        error={errors.main_phone}
        {...register('main_phone')}
      />
      <InputContent
        name="secondary_phone"
        placeholder="Telefone 2"
        type="number"
        error={errors.secondary_phone}
        {...register('secondary_phone')}
      />

      <InputContent
        name="whatsapp_phone"
        placeholder="WhatsApp"
        type="number"
        {...register('whatsapp_phone')}
      />

      {/* <SelectContent
        name="state"
        onChange={e => console.log(e.target.value)}
        {...register('state')}
      >
        {ufs.map(uf => (
          <option value={uf}>{uf}</option>
        ))}
      </SelectContent>

      <SelectContent {...register('city')}>
        {cities.map(city => (
          <option value={city}>{city}</option>
        ))}
      </SelectContent> */}

      <SignInButton type="submit">
        {formState.isSubmitting
          ? 'Aguarde...'
          : isEditing
          ? 'Salvar'
          : 'Cadastrar'}
      </SignInButton>
    </Container>
  );
}
