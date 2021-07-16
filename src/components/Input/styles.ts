import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 4rem;
  background: var(--white);
  border-radius: 0.8rem;

  justify-content: stretch;

  & + div {
    margin-top: 1rem;
  }
`;

export const InputContent = styled.input`
  border: 0;
  flex: 1;
  padding: 0 1.5rem;
  border-radius: inherit;

  ::placeholder {
    color: var(--description);
  }
`;

export const Icon = styled.div`
  width: 50px;
`;
