import styled from 'styled-components';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { Textarea } from '../../../../components/Textarea';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  min-height: calc(100vh - 8rem - 6rem - 5rem);
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: 2.5rem 0;

  font-size: 1.5rem;

  form {
    display: grid;
    grid-gap: 1rem;
    width: 40rem;

    h2 {
      font-size: 1.6rem;
    }

    div {
      &.address_name {
        display: grid;
        grid-template-columns: 5fr 2fr;
        grid-gap: inherit;
      }

      &.neighborhood {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap: inherit;
      }

      &.state {
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-gap: inherit;
      }

      & + div {
        margin-top: 0;
      }
    }
  }

  > div {
    width: 30rem;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin-top: 1.5rem;
  }
`;

export const SignInButton = styled(Button)`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  height: 4rem;
`;

export const InputContent = styled(Input)`
  width: 0;
  font-size: 1.5rem;
`;

export const TextareaContent = styled(Textarea)`
  font-size: 1.5rem;
`;
