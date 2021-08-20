import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';

import {
  Container,
  TextareaContet,
  ButtonContainer,
  ButtonContent,
} from './styles';

type AuditorMessageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  onSubmit: (message: string) => void;
};

export function AuditorMessageModal({
  isOpen,
  onSubmit,
  onRequestClose,
}: AuditorMessageModalProps) {
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
          <h2>Motivo</h2>
        </header>

        <div>
          <TextareaContet name="reason" placeholder="Descrição" />

          <ButtonContainer>
            <div />
            <ButtonContent onClick={() => onSubmit('teste')}>
              Enviar
            </ButtonContent>
          </ButtonContainer>
        </div>
      </Container>
    </Modal>
  );
}
