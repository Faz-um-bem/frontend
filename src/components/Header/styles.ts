import styled from 'styled-components';

type ContainerProps = {
  isDrawerOpen: boolean;
};

type HeaderContentProps = {
  isDrawerOpen: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 6rem;
  width: 100%;

  background: var(--white);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  padding: 2.5rem;

  position: relative;
  z-index: 1;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    ${props => props.isDrawerOpen && 'justify-content: space-between;'}

    max-width: 1120px;
    width: 100%;

    > button {
      > img {
        height: 4.5rem;
      }

      > svg {
        color: var(--blue);
      }
    }
  }
`;

export const HeaderContent = styled.div<HeaderContentProps>`
  ${props => props.isDrawerOpen && `display: flex; flex-direction: column;`}
  flex: 1;
`;

export const HeaderItem = styled.button.attrs({
  type: 'button',
})`
  background: transparent;
  border: 0;
  margin: 0 2px;
  padding: 0.2rem 0.3rem;

  color: var(--blue);
  font-size: 1.2rem;

  a {
    color: var(--blue);
  }

  :first-child {
    margin-left: 1.2rem;
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

    width: 5rem;

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
    font-size: 1.2rem;
    font-weight: normal;

    margin-right: 1rem;
    padding-right: 1rem;

    border-right: 1px solid var(--description);
  }

  button {
    background: transparent;
    color: var(--blue);

    width: 5rem;

    font-size: 1rem;
  }
`;

export const DrawerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  button {
    padding: 0 0.8rem;
    background: var(--blue);
    border: 1px solid var(--blue);
    border-radius: 0.5rem;
    color: var(--white);

    width: 10rem;
    height: 4rem;

    transition: all 0.5s;

    :hover {
      background: var(--white);
      color: var(--blue);
      font-weight: bold;
    }
  }
`;
