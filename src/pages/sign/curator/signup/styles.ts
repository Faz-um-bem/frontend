import styled from 'styled-components';
import { Button }  from '../../../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  height: calc(100vh - 80px - 6rem);
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  form {
    width: 40rem;
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
