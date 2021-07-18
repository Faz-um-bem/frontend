import styled from 'styled-components';
import { Button } from '../Button';
import { Input } from '../Input';
import { Textarea } from '../Textarea';

export const Container = styled.form`
  div {
    &.address_name {
      display: grid;
      grid-template-columns: 5fr 3fr;
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
`;

export const SignInButton = styled(Button)`
  margin-top: 1.5rem;
`;

export const InputContent = styled(Input)``;

export const TextareaContent = styled(Textarea)``;
