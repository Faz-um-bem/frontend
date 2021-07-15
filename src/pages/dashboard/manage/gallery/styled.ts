import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  min-height: calc(100vh - 80px - 6rem);

  margin: 2.5rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    text-align: center;
    color: var(--heading);
  }
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2.5rem;

  margin: 2.5rem 0;
`;
