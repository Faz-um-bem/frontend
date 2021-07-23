import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.5rem 0;

  max-width: 1120px;
  width: 100%;
  min-height: calc(100vh - 6rem - 6rem);

  h1 {
    color: var(--heading);
    font-size: 1.5rem;
  }

  form {
    margin-top: 2.5rem;

    display: grid;
    grid-gap: 1rem;
    width: 30rem;

    h2 {
      font-size: 1.2rem;
    }
  }

  > button {
    background: transparent;
    border: 0;
    font-size: 1rem;
    color: var(--black);
    margin-top: 2.5rem;
  }
`;
