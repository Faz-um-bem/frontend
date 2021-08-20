import { useState, useCallback } from 'react';
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
  MapContainer,
} from './styles';

type InstitutionModalProps = {
  isOpen: boolean;
  data: any | null;
  onRequestClose: () => void;
  onAccept: () => void;
  onReject: () => void;
};

export function InstitutionModal({
  isOpen,
  data,
  onAccept,
  onReject,
  onRequestClose,
}: InstitutionModalProps) {
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
          <h2>Auditar instituição</h2>
        </header>

        <div>
          <img src="" alt="logo" />
          <InputContent name="title" placeholder="Titulo" disabled />
          <TextareaContet name="description" placeholder="Descrição" disabled />

          <div className="address_name">
            <InputContent name="address" placeholder="Endereço" disabled />
            <InputContent name="address_number" placeholder="Número" disabled />
          </div>

          <InputContent
            name="address_complement"
            placeholder="Complemento"
            disabled
          />

          <div className="neighborhood">
            <InputContent name="neighborhood" placeholder="Bairro" disabled />
            <InputContent name="cep" placeholder="CEP" disabled />
          </div>

          <div className="state">
            <InputContent name="uf" placeholder="UF" disabled />
            <InputContent name="city" placeholder="Cidade" disabled />
          </div>

          <ButtonContainer delete={!!data}>
            <div />
            {data && (
              <ButtonContent className="delete" onClick={onReject}>
                Recusar
              </ButtonContent>
            )}
            <ButtonContent onClick={onAccept}>Aprovar</ButtonContent>
          </ButtonContainer>
        </div>
      </Container>
    </Modal>
  );
}
