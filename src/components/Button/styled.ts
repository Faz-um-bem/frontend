import styled from "styled-components";
// eslint-disable-next-line
export const Container = styled.button`
  background: var(--blue);

  border: 0;
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  padding: 5px 10px;

  color: var(--white);

  font-size: 2rem;

  transition: all 0.2s;

  :hover {
    background: var(--white);
    border: 1px solid var(--blue);
    color: var(--blue);
    font-weight: bold;
  }
`;
