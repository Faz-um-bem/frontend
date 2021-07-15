import styled from 'styled-components';
import { Button }  from '../../../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  min-height: calc(100vh - 80px - 6rem);
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: 2rem 0;

  form {
    width: 40rem;

    div {
      &.neighborhood {
        display: grid;
        grid-template-columns: 2fr 1fr;
      }

      &.state {
        display: grid;
        grid-template-columns: 1fr 3fr;
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
`;
