import styled from 'styled-components';

export const Container = styled.div`
  height: 8rem;
  width: 100%;

  display: block;
  background: var(--white);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;

  > div {
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

export const HeaderContent = styled.div`
  flex: 1;
`;

export const HeaderItem = styled.button.attrs({
  type: 'button',
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

export const LoginContent = styled.div`
  button {
    padding: 0.8rem;
    background: var(--blue);
    border: 1px solid var(--blue);
    border-radius: 0.5rem;
    color: var(--white);

    width: 16rem;

    transition: all 0.5s;

    a {
      color: inherit;
    }

    :hover {
      background: var(--white);
      color: var(--blue);
      font-weight: bold;
    }
  }
`;

export const LoggedContent = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  h1 {
    color: var(--heading);
    font-size: 1.8rem;
    font-weight: normal;

    margin-right: 1rem;
    padding-right: 1rem;

    border-right: 1px solid var(--description);
  }

  button {
    background: transparent;
    color: var(--blue);
    /* border: 0; */

    width: 5rem;

    font-size: 1.5rem;
  }
`;
