import { useState, useCallback, ChangeEvent, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { FiAlertCircle } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';

import { LatLngExpression } from 'leaflet';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { convertToBase64 } from '~/utils/convert';
import {
  Container,
  UploadButton,
  InputContent,
  TextareaContet,
  ButtonContainer,
  ButtonContent,
  MapContainer,
} from './styles';

const ViewMap = dynamic(() => import('~/components/maps/SelectMap'), {
  ssr: false,
});

type CampaignData = {
  id: number;
  title: string;
  description: string;
  address: string;
  address_number: string;
  address_complement: string;
  neighborhood: string;
  postal_code: string;
  state: string;
  city: string;
  address_latitude: string;
  address_longitude: string;
  status: number;
  logo: string | null;
  file?: {
    name: string;
    type: string;
    size: number;
    value: string;
  };
};

type NewCampaigModalProps = {
  isOpen: boolean;
  data: CampaignData | null;
  onRequestClose: () => void;
  onCreate?: (values: CampaignData) => void;
  onUpdate?: (values: CampaignData, id: number) => void;
  onDelete?: (id: number) => void;
};

const formSchema = yup.object().shape({
  title: yup.string().required('Titulo é obrigatório'),
  description: yup.string().required('Descrição obrigatória'),
  address: yup.string().required('Endereço obrigatório'),
  address_number: yup.string().required('Número do endereço obrigatório'),
  address_complement: yup.string().required('Complemento é obrigatório'),
  neighborhood: yup.string().required('Bairro é obrigatório'),
  postal_code: yup.string().required('CPF é obrigatório'),
  state: yup.string().required('UF é obrigatório'),
  city: yup.string().required('Cidade é obrigatória'),
});

export default function CampaigModal({
  isOpen,
  data,
  onCreate,
  onUpdate,
  onDelete,
  onRequestClose,
}: NewCampaigModalProps) {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: data || {
      title: '',
      description: '',
      address: '',
      address_number: '',
      address_complement: '',
      neighborhood: '',
      postal_code: '',
      state: '',
      city: '',
    },
  });

  const { errors, dirtyFields } = formState;
  const [location, setLocation] = useState<LatLngExpression>();
  const [image, setImage] = useState(null);

  const handleSubmitForm: SubmitHandler<CampaignData> = (values, event) => {
    event.preventDefault();
    if (data) {
      onUpdate(
        {
          ...values,
          file: image,
          address_longitude: String(location.lng),
          address_latitude: String(location.lat),
        },
        data.id,
      );
    } else {
      onCreate({
        ...values,
        file: image,
        address_longitude: String(location.lng),
        address_latitude: String(location.lat),
      });
    }
  };

  const handleDelete = () => {
    onDelete(data.id);
  };

  useEffect(() => reset(), []);

  const handleSelectImages = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target) return;
    const imageBase64 = await convertToBase64(event.target.files[0]);

    const { name, size, type } = event.target.files[0];
    setImage({
      preview: imageBase64.urlPreview,
      value: imageBase64.base64,
      name,
      size,
      type,
    });
  };

  useEffect(() => {
    return () => reset();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleSubmit(handleSubmitForm)}>
        <header>
          <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <IoMdClose size={30} />
          </button>
          <h2>{data ? 'Editar' : 'Cadastrar'} campanha</h2>
        </header>

        <div>
          {(!!data?.logo || !!image) && (
            <img src={image?.preview || data.logo} alt="Imagem" />
          )}
          <div className="name">
            <UploadButton>
              <label htmlFor="image">
                {!!data?.logo || !!image
                  ? 'Alterar imagem'
                  : 'Upload da imagem'}
              </label>

              <input type="file" id="image" onChange={handleSelectImages} />
            </UploadButton>
            <InputContent
              name="title"
              placeholder="Titulo"
              error={errors.title}
              isFilled={dirtyFields.title}
              {...register('title')}
            />
          </div>
          <TextareaContet
            name="description"
            placeholder="Descrição"
            error={errors.description}
            isFilled={dirtyFields.description}
            {...register('description')}
          />

          <MapContainer>
            <ViewMap
              center={[
                Number(data?.address_latitude) || -29.6984707,
                Number(data?.address_longitude) || -53.8853061,
              ]}
              markerPosition={
                location ||
                (data?.address_latitude && [
                  Number(data?.address_latitude),
                  Number(data?.address_longitude),
                ])
              }
              onChangeMakerPosition={setLocation}
            />
          </MapContainer>

          <div className="address_name">
            <InputContent
              name="address"
              placeholder="Endereço"
              error={errors.address}
              isFilled={dirtyFields.address}
              {...register('address')}
            />
            <InputContent
              name="address_number"
              placeholder="Número"
              error={errors.address_number}
              isFilled={dirtyFields.address_number}
              {...register('address_number')}
            />
          </div>

          <InputContent
            name="address_complement"
            placeholder="Complemento"
            error={errors.address_complement}
            isFilled={dirtyFields.address_complement}
            {...register('address_complement')}
          />

          <div className="neighborhood">
            <InputContent
              name="neighborhood"
              placeholder="Bairro"
              error={errors.neighborhood}
              isFilled={dirtyFields.neighborhood}
              {...register('neighborhood')}
            />
            <InputContent
              name="postal_code"
              placeholder="CEP"
              error={errors.postal_code}
              isFilled={dirtyFields.postal_code}
              {...register('postal_code')}
            />
          </div>

          <div className="state">
            <InputContent
              name="state"
              placeholder="UF"
              error={errors.state}
              isFilled={dirtyFields.state}
              {...register('state')}
            />
            <InputContent
              name="city"
              placeholder="Cidade"
              error={errors.city}
              isFilled={dirtyFields.city}
              {...register('city')}
            />
          </div>

          <ButtonContainer delete={!!data}>
            <div>
              <>
                <FiAlertCircle size={25} />
                <span>
                  Sua campanha será analisada para poder ser publicada.
                </span>
              </>
            </div>
            {data && (
              <ButtonContent className="delete" onClick={handleDelete}>
                Excluir
              </ButtonContent>
            )}
            <ButtonContent type="submit">Publicar</ButtonContent>
          </ButtonContainer>
        </div>
      </Container>
    </Modal>
  );
}
