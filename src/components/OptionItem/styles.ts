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

  width: 15rem;
  height: 15rem;

  svg {
    color: var(--blue);
  }

  &:disabled {
    background: var(--background-disabled);
    cursor: default;

    svg {
      color: var(--text-disabled);
    }

    h1 {
      color: var(--text-disabled);
    }
  }
`;

export const Label = styled.h1`
  font-size: 1rem;
  color: var(--heading);
  margin-top: 1rem;
  width: 10rem;
`;
