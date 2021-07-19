import { FiAlertCircle } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';
// import { MapContainer, TileLayer } from 'react-leaflet';

import {
  Container,
  UploadButton,
  InputContent,
  TextareaContet,
  ButtonContainer,
  ButtonContent,
  Map,
} from './styles';

type NewCampaigModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewCampaigModal({
  isOpen,
  onRequestClose,
}: NewCampaigModalProps) {
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
        <h2>Cadastrar campanha</h2>

        <div>
          <div className="name">
            <UploadButton>Upload da imagem</UploadButton>
            <InputContent name="title" placeholder="Titulo" />
          </div>
          <TextareaContet name="description" placeholder="Descrição" />

          <Map>
            {/* <MapContainer
            center={[-29.6987317, -53.8780534]}
            zoom={13}
            style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
            />
          </MapContainer> */}
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

          <ButtonContainer>
            <div>
              <FiAlertCircle size={25} />
              <span>Sua campanha será analisada para poder ser publicada.</span>
            </div>

            <ButtonContent>Publicar</ButtonContent>
          </ButtonContainer>
        </div>
      </Container>
    </Modal>
  );
}
