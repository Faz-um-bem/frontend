import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { FiAlertCircle } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';
import { Marker, useMapEvents } from 'react-leaflet';
import Leaflet from 'leaflet';

import {
  Container,
  UploadButton,
  InputContent,
  TextareaContet,
  ButtonContainer,
  ButtonContent,
  Map,
} from './styles';

const InstitutionsMap = dynamic(
  () => import('~/components/maps/InstitutionsMap'),
  {
    ssr: false,
  },
);

const mapIcon = Leaflet.icon({
  iconUrl: '/imgs/marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
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

export default function NewCampaigModal({
  isOpen,
  data,
  onCreate,
  onUpdate,
  onDelete,
  onRequestClose,
}: NewCampaigModalProps) {
  const [location, setLocation] = useState(null);

  const handleSubmit = useCallback(values => {
    if (data) {
      onUpdate(values);
    } else {
      onCreate(values);
    }
  }, []);

  console.log(location);

  const LocationEvents = () => {
    useMapEvents({
      click(e) {
        setLocation(e.latlng);
      },
    });
    return null;
  };

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
            <InstitutionsMap center={[-29.6984707, -53.8853061]}>
              <LocationEvents />
              {location && <Marker position={location} icon={mapIcon} />}
            </InstitutionsMap>
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
