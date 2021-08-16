import styled, { css } from 'styled-components';

import Tooltip from '~/components/Tooltop';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 4rem;
  background: ${props => (props.disabled ? '#fafafa' : 'var(--white)')};
  border-radius: 0.8rem;
  border: 0.2rem solid ${props => (props.disabled ? '#fafafa' : 'var(--white)')};
  padding-left: 1rem;

  > svg {
    margin-right: 1rem;
    color: var(--description);

    ${props =>
      props.isFilled &&
      css`
        color: var(--blue);
      `}

    ${props =>
      props.isErrored &&
      css`
        color: var(--red);
      `}
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--blue);
      border-color: var(--blue);
    `}
`;

export const InputContent = styled.input`
  border: 0;
  flex: 1;
  padding: 0 1rem 0 0;
  border-radius: inherit;
  font-size: 1rem;
  height: 3rem;

  ::placeholder {
    color: var(--description);
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin: 0 1rem;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
