import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  min-height: calc(100vh - 8rem - 6rem - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;
`;

export const OptionList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;
