import styled from 'styled-components';

type ShowScrollProps = {
  showScroll: boolean;
};

export const Container = styled.div<ShowScrollProps>`
  display: ${props => (props.showScroll ? 'flex' : 'none')};
  position: ${props => (props.showScroll ? 'fixed' : 'none')};
  bottom: 25px;
  right: 25px;
  background: var(--white);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  ${props => props.showScroll && 'align-items: center'};
  z-index: 999999;

  svg {
    width: 4.5rem;
    height: 4.5rem;
    color: var(--orange);
  }

  @media (max-width: 575.98px) {
    right: 15px;
  }
`;
