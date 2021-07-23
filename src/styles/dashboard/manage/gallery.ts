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
`;
