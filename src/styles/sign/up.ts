import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  min-height: calc(100vh - 6rem - 6rem - 5rem);
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: 2.5rem 0;

  font-size: 1rem;

  form {
    display: grid;
    grid-gap: 1rem;
    width: 40rem;

    h2 {
      font-size: 1.2rem;
    }
  }

  > div {
    width: 30rem;

    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 1.5rem;

    button {
      background: transparent;
      border: 0;
      font-size: 1rem;
      color: var(--black);
    }
  }
`;
