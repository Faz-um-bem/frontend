import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  width: 100%;
  min-height: calc(100vh - 8rem - 6rem - 5rem);
  margin: 2.5rem 0;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 3rem;

  h1 {
    color: var(--heading);
    font-size: 2rem;
  }

  p {
    color: var(--text);
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;

  margin: 3rem 0;

  height: 100%;
`;
