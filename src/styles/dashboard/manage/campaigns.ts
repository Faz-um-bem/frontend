import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  min-height: calc(100vh - 8rem - 6rem - 5rem);
  max-width: 1120px;
  width: 100%;
  margin: 2.5rem 0;

  header {
    display: flex;
    flex-direction: row;
    height: 30px;

    button {
      margin-left: 1.5rem;
      background: transparent;
      border: 0;

      svg {
        color: var(--blue);
      }
    }
  }

  h1 {
    color: var(--heading);
  }
`;

export const CampaignList = styled.div`
  margin: 2.5rem 0;
`;
