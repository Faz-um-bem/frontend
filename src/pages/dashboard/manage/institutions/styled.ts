import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  min-height: calc(100vh - 80px - 6rem);
  max-width: 1120px;
  width: 100%;
  margin: 2.5rem 0;

  h1 {
    color: var(--heading);
  }
`;

export const CampaignList = styled.div`
  margin: 2.5rem 0;
`;
