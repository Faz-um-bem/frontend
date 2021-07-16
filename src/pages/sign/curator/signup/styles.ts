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

    display: grid;
    grid-gap: 1rem;
  }

  > div {
    width: 30rem;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin-top: 1.5rem;

    a {
      font-size: 1.5rem;
    }
  }
`;

export const SignInButton = styled(Button)`
  margin-top: 1.5rem;
`;
