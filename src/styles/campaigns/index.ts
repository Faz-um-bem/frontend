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
  min-height: calc(100vh - 6rem - 6rem - 5rem);
  margin: 2.5rem 0;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 2.5rem;
  margin-top: 1rem;

  h1 {
    color: var(--heading);
    font-size: 1.5rem;
  }

  p {
    color: var(--text);
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;

  margin: 3rem 2rem;

  height: 100%;

  @media (max-width: 991.98px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767.98px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
  }
`;
