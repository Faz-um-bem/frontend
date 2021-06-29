import styled from "styled-components";

// eslint-disable-next-line
export const InputContent = styled.textarea`
  padding: 1rem 1.5rem;

  background: var(--white);
  border-radius: 0.8rem;
  border: 0;

  width: 100%;

  resize: none;

  ::placeholder {
    color: var(--description);
  }
`;
