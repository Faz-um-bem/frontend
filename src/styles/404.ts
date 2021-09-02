import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 500px;
    height: 450px;

    img {
      width: 480px;
      height: auto;
    }

    span {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--heading);
      text-align: center;
      margin-top: 1rem;
    }
  }
`;
