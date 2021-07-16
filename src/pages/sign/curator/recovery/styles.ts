import styled from 'styled-components';
import { Button } from '../../../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  height: calc(100vh - 8rem - 6rem - 5rem);
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: 2.5rem 0;

  form {
    width: 40rem;

    h2 {
      font-size: 1rem;
      margin: 1rem 0;
    }
  }

  > div {
    width: 30rem;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin-top: 1.5rem;

    a {
      font-size: 1.5rem;
      color: var(--black);

      :active :visited {
        color: inherit;
      }
    }
  }
`;

export const SignInButton = styled(Button)`
  margin-top: 1.5rem;
`;
