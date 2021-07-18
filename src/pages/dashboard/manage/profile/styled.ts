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
  min-height: calc(100vh - 8rem - 6rem);

  h1 {
    color: var(--heading);
    font-size: 2rem;
  }

  form {
    margin-top: 2.5rem;

    display: grid;
    grid-gap: 1rem;
    width: 50rem;

    h2 {
      font-size: 1.6rem;
    }
  }

  > button {
    background: transparent;
    border: 0;
    font-size: 1.5rem;
    color: var(--black);
    margin-top: 2.5rem;
  }
`;
