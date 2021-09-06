import styled from 'styled-components';
import { Button } from '~/components/Button';
import { Input } from '~/components/forms/Input';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: calc(100vh - 6rem - 6rem - 5rem);

  margin: 2.5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    text-align: center;
    color: var(--heading);
    font-size: 1.5rem;
    font-weight: bold;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;

    width: 100%;

    margin-top: 1.5rem;
  }

  @media (max-width: 991.98px) {
    padding: 0 1rem;
  }
`;

export const InputContent = styled(Input)``;

export const ButtonSubmit = styled(Button)`
  margin-top: 1.5rem;
`;
