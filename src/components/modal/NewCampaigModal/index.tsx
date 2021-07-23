import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { FiAlertCircle } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';

import {
  Container,
  UploadButton,
  InputContent,
  TextareaContet,
  ButtonContainer,
  ButtonContent,
  Map,
} from './styles';

const MapSelect = dynamic(() => import('~/components/MapSelect'), {
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
  status: 'active' | 'inactive' | 'draft' | 'refused' | null;
};

type NewCampaigModalProps = {
  isOpen: boolean;
  data: CampaignData | null;
  onRequestClose: () => void;
  onCreate: (values: CampaignData) => void;
  onUpdate: (values: CampaignData) => void;
  onDelete: (id: number) => void;
};

export function NewCampaigModal({
  isOpen,
  data,
  onCreate,
  onUpdate,
  onDelete,
  onRequestClose,
}: NewCampaigModalProps) {
  const [position, setPosition] = useState(null);

  const handleSubmit = useCallback(values => {
    if (data) {
      onUpdate(values);
    } else {
      onCreate(values);
    }
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <IoMdClose size={30} />
        </button>
        <h2>{data ? 'Editar' : 'Cadastrar'} campanha</h2>

        <div>
          <div className="name">
            <UploadButton>Upload da imagem</UploadButton>
            <InputContent name="title" placeholder="Titulo" />
          </div>
          <TextareaContet name="description" placeholder="Descrição" />

          <Map>
            <MapSelect position={position} onChangePosition={setPosition} />
          </Map>

          <div className="address_name">
            <InputContent name="address" placeholder="Endereço" />
            <InputContent name="address_number" placeholder="Número" />
          </div>

          <InputContent name="address_complement" placeholder="Complemento" />

          <div className="neighborhood">
            <InputContent name="neighborhood" placeholder="Bairro" />
            <InputContent name="cep" placeholder="CEP" />
          </div>

          <div className="state">
            <InputContent name="uf" placeholder="UF" />
            <InputContent name="city" placeholder="Cidade" />
          </div>

          <ButtonContainer delete={!!data}>
            <div>
              <FiAlertCircle size={25} />
              <span>Sua campanha será analisada para poder ser publicada.</span>
            </div>
            {data && (
              <ButtonContent
                className="delete"
                onClick={() => onDelete(data.id)}
              >
                Excluir
              </ButtonContent>
            )}
            <ButtonContent onClick={handleSubmit}>Publicar</ButtonContent>
          </ButtonContainer>
        </div>
      </Container>
    </Modal>
  );
}
