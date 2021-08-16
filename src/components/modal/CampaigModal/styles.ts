import styled from 'styled-components';
import { Button } from '~/components/Button';
import { Input } from '~/components/forms/Input';
import { Textarea } from '~/components/forms/Textarea';

type ButtonsProps = {
  delete: boolean;
};

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  max-height: 500px;

  header {
    background: var(--white);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 1.3rem;
    color: var(--heading);
    padding-bottom: 1.5rem;
    padding: 1.5rem;
  }

  > div {
    overflow-y: scroll;
    padding: 1.5rem;

    > img {
      height: 8rem;
      margin: 0 auto;
    }

    > div {
      display: grid;
      grid-gap: 0.5rem;

      margin-top: 1rem;

      &.name {
        grid-template-columns: 1fr 3fr;
      }

      &.address_name {
        grid-template-columns: 2fr 1fr;
      }

      &.neighborhood {
        grid-template-columns: 3fr 2fr;
      }

      &.state {
        grid-template-columns: 2fr 8fr;
      }
    }
  }
`;

export const UploadButton = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;

  background: var(--blue);
  padding: 0 0.5rem;

  border-radius: 0.8rem;

  label {
    text-align: center;
    color: var(--white);
    font-size: 1rem;
  }

  input[type='file'] {
    display: none;
  }
`;

export const InputContent = styled(Input)``;

export const TextareaContet = styled(Textarea)``;

export const ButtonContainer = styled.div<ButtonsProps>`
  grid-template-columns: ${props => (props.delete ? '4fr 2fr 2fr' : '4fr 1fr')};

  > div {
    display: flex;
    align-items: center;

    svg {
      color: var(--red);
      margin: 0 1.5rem 0 0;
    }

    span {
      width: 14rem;
      font-size: 0.8rem;
      color: var(--text);
    }
  }
`;

export const ButtonContent = styled(Button)`
  background: var(--green);
  margin-top: 1.5rem;
  height: 3rem;

  :hover {
    color: var(--green);
    border-color: var(--green);
  }

  &.delete {
    background: var(--white);
    color: var(--red);
    border: 1px solid var(--red);

    :hover {
      background: var(--red);
      color: var(--white);
    }
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 1rem;
`;
