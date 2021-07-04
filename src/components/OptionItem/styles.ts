import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  background: var(--white);
  border-radius: 1rem;

  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 25rem;
  height: 25rem;

  svg {
    color: var(--blue);
  }
`;

export const Label = styled.h1`
  font-size: 1.5rem;
  color: var(--heading);
  margin-top: 1rem;
`;
