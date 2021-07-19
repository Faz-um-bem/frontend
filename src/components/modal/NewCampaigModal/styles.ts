import styled from 'styled-components';
import { Button } from '../../Button';
import { Input } from '../../Input';
import { Textarea } from '../../Textarea';

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  max-height: 500px;

  h2 {
    font-size: 1.8rem;
    color: var(--heading);
    padding-bottom: 1.5rem;
    padding: 1.5rem;
  }

  > div {
    overflow-y: scroll;
    padding: 1.5rem;

    > div {
      display: grid;
      grid-gap: 1.5rem;

      margin-top: 1rem;

      &.name {
        grid-template-columns: 2fr 5fr;
      }

      &.address_name {
        grid-template-columns: 5fr 1fr;
      }

      &.neighborhood {
        grid-template-columns: 3fr 2fr;
      }

      &.state {
        grid-template-columns: 1fr 5fr;
      }
    }
  }
`;

export const UploadButton = styled(Button)``;

export const InputContent = styled(Input)``;

export const TextareaContet = styled(Textarea)``;

export const ButtonContainer = styled.div`
  grid-template-columns: 5fr 2fr;

  > div {
    display: flex;
    align-items: center;

    svg {
      color: var(--red);
      margin: 0 1.5rem 0 0;
    }

    span {
      width: 18rem;
      font-size: 1.2rem;
      color: var(--text);
    }
  }
`;

export const ButtonContent = styled(Button)`
  background: var(--green);
  margin-top: 1.5rem;
  height: 5rem;

  :hover {
    color: var(--green);
    border-color: var(--gren);
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 1rem;
`;
