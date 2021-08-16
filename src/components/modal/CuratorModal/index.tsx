import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Modal from 'react-modal';
import Switch from 'react-switch';

import {
  ButtonContainer,
  ButtonContent,
  Container,
  InputContent,
} from './styled';

export function CuratorModal({
  data,
  isOpen,
  onRequestClose,
  onDelete,
  onSubmit,
}) {
  const [isAdministrator, setIsAdministrator] = useState(false);

  const toggleSwitch = () => setIsAdministrator(prevValue => !prevValue);

  const handleSubmit = () => {};

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
          <h2>{data ? 'Editar' : 'Cadastrar'} curador</h2>
        </header>

        <div>
          <InputContent name="name" placeholder="Nome completo" />
          <InputContent name="email" placeholder="Email" />
          <InputContent name="password" placeholder="Senha" />
          <InputContent
            name="password_confirmation"
            placeholder="Confirmação de senha"
          />

          <ButtonContainer delete={!!data}>
            <div>
              <Switch
                onChange={toggleSwitch}
                checked={isAdministrator}
                checkedIcon={false}
                uncheckedIcon={false}
              />

              <span>Administrador do sistema</span>
            </div>
            {data && (
              <ButtonContent
                className="delete"
                onClick={() => onDelete(data.id)}
              >
                Excluir
              </ButtonContent>
            )}
            <ButtonContent onClick={handleSubmit}>
              {data ? 'Salvar' : 'Registrar'}
            </ButtonContent>
          </ButtonContainer>
        </div>
      </Container>
    </Modal>
  );
}
