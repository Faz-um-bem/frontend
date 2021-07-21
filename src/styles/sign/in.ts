import styled from 'styled-components';
import { Button } from '~/components/Button';

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

  form {
    width: 40rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;

    h2 {
      font-size: 1rem;
      margin: 1rem 0;
    }
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;

    margin-top: 1.5rem;

    &.back {
      grid-template-columns: 1fr;
    }

    button {
      background: transparent;
      border: 0;
      font-size: 1.5rem;
      color: var(--black);
    }
  }
`;

export const SignInButton = styled(Button)`
  margin-top: 0.5rem;
`;
