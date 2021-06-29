import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;

  display: block;
  background: var(--white);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    max-width: 1120px;
    width: 100%;

    > img {
      height: 6rem;
    }
  }
`;

export const HeaderContent = styled.div``;

export const HeaderItem = styled.button.attrs({
  type: "button",
})`
  background: transparent;
  border: 0;
  margin: 0 10px;
  padding: 0.2rem 0.5rem;

  color: var(--blue);
  font-size: 1.8rem;

  a {
    color: var(--blue);
  }

  :first-child {
    margin-left: 5rem;
  }

  :hover {
    text-decoration: underline;
  }
`;
