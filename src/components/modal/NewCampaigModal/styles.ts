import styled from 'styled-components';
import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import { Textarea } from '~/components/Textarea';

type ButtonsProps = {
  delete: boolean;
};

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  max-height: 500px;

  h2 {
    font-size: 1.3rem;
    color: var(--heading);
    padding-bottom: 1.5rem;
    padding: 1.5rem;
  }

  > div {
    overflow-y: scroll;
    padding: 1.5rem;

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

export const UploadButton = styled(Button)`
  height: 4rem;
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

export const Map = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 1rem;
`;
