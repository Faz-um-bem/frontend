import styled from 'styled-components';

export const Container = styled.section`
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

  margin-top: 2rem;
  margin: 0 2.5rem;

  h1 {
    color: var(--heading);
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    color: var(--text);
    font-size: 1rem;
  }
`;

export const MapContainer = styled.div`
  width: 93%;
  height: 40rem;

  margin-top: 1rem;
  margin: 0 auto;

  border-radius: 0.8rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--background-gray);

  @media (max-width: 767.98px) {
    height: 30rem;
    width: 90%;
  }

  @media (max-width: 575.98px) {
    height: 20rem;
    width: 86%;
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  margin: 1.5rem 0;
  padding: 0 2.5rem;

  height: 100%;

  @media (max-width: 991.98px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 767.98px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr;
  }
`;
