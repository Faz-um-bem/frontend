import { useState, useCallback, ChangeEvent } from 'react';
import dynamic from 'next/dynamic';
import { FiAlertCircle } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';

import { LatLngExpression } from 'leaflet';
import {
  Container,
  UploadButton,
  InputContent,
  TextareaContet,
  ButtonContainer,
  ButtonContent,
  MapContainer,
} from './styles';

import { convertToBase64 } from '~/utils/convert';

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
  status: 'active' | 'inactive' | 'draft' | 'refused' | null;
};

type NewCampaigModalProps = {
  isOpen: boolean;
  data: CampaignData | null;
  onRequestClose: () => void;
  onCreate: (values: CampaignData) => void;
  onUpdate: (values: CampaignData) => void;
  onDelete: () => void;
  onAccept: () => void;
  onReject: () => void;
  isAuditing: boolean;
};

export default function CampaigModal({
  isOpen,
  data,
  onCreate,
  onUpdate,
  onDelete,
  onRequestClose,
  onAccept,
  onReject,
  isAuditing = false,
}: NewCampaigModalProps) {
  const [location, setLocation] = useState<LatLngExpression>();
  const [image, setImage] = useState(null);

  const handleSubmit = useCallback(
    values => {
      if (isAuditing) {
        onAccept();
      } else if (data) {
        onUpdate(values);
      } else {
        onCreate(values);
      }
    },
    [data, onCreate, onUpdate],
  );

  const handleDelete = () => {
    if (isAuditing) {
      onReject();
    } else {
      onDelete();
    }
  };

  const handleSelectImages = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target) return;
    const imageBase64 = await convertToBase64(event.target.files[0]);
    setImage(imageBase64);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <header>
          <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <IoMdClose size={30} />
          </button>
          <h2>
            {data ? (isAuditing ? 'Auditar' : 'Editar') : 'Cadastrar'} campanha
          </h2>
        </header>

        <div>
          {!!image && <img src={image} alt="Imagem" />}
          <div className={isAuditing ? '' : 'name'}>
            {!isAuditing && (
              <UploadButton>
                <label htmlFor="image">Upload da imagem</label>

                <input type="file" id="image" onChange={handleSelectImages} />
              </UploadButton>
            )}
            <InputContent
              name="title"
              placeholder="Titulo"
              disabled={isAuditing}
            />
          </div>
          <TextareaContet
            name="description"
            placeholder="Descrição"
            disabled={isAuditing}
          />

          <MapContainer>
            <ViewMap
              center={[-29.6984707, -53.8853061]}
              markerPosition={location}
              onChangeMakerPosition={setLocation}
              interactive={!isAuditing}
            />
          </MapContainer>

          <div className="address_name">
            <InputContent
              name="address"
              placeholder="Endereço"
              disabled={isAuditing}
            />
            <InputContent
              name="address_number"
              placeholder="Número"
              disabled={isAuditing}
            />
          </div>

          <InputContent
            name="address_complement"
            placeholder="Complemento"
            disabled={isAuditing}
          />

          <div className="neighborhood">
            <InputContent
              name="neighborhood"
              placeholder="Bairro"
              disabled={isAuditing}
            />
            <InputContent name="cep" placeholder="CEP" disabled={isAuditing} />
          </div>

          <div className="state">
            <InputContent name="uf" placeholder="UF" disabled={isAuditing} />
            <InputContent
              name="city"
              placeholder="Cidade"
              disabled={isAuditing}
            />
          </div>

          <ButtonContainer delete={!!data}>
            <div>
              {!isAuditing && (
                <>
                  <FiAlertCircle size={25} />
                  <span>
                    Sua campanha será analisada para poder ser publicada.
                  </span>
                </>
              )}
            </div>
            {data && (
              <ButtonContent className="delete" onClick={handleDelete}>
                {isAuditing ? 'Rejeitar' : 'Excluir'}
              </ButtonContent>
            )}
            <ButtonContent onClick={handleSubmit}>
              {isAuditing ? 'Aceitar' : 'Publicar'}
            </ButtonContent>
          </ButtonContainer>
        </div>
      </Container>
    </Modal>
  );
}
