import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
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

  @media (max-width: 991.98px) {
    padding: 0 1rem;
  }
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2.5rem;

  margin: 2.5rem 0;

  @media (max-width: 991.98px) {
    grid-template-columns: repeat(4, 1fr);
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 767.98px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 575.98px) {
    grid-template-columns: 1fr 1fr;
  }
`;
