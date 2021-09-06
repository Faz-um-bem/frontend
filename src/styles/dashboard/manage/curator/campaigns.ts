import styled from 'styled-components';
import { Button } from '~/components/Button';
import { Input } from '~/components/forms/Input';
import { Select } from '~/components/forms/Select';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  min-height: calc(100vh - 6rem - 6rem - 5rem);
  max-width: 1120px;
  width: 100%;
  margin: 2.5rem 0;

  header {
    display: flex;
    flex-direction: row;
    height: 30px;
    align-items: center;

    h1 {
      color: var(--heading);
      font-size: 1.5rem;
      font-weight: bold;
    }

    button {
      margin-left: 1.5rem;
      background: transparent;
      border: 0;

      svg {
        color: var(--blue);
      }
    }
  }

  @media (max-width: 991.98px) {
    padding: 0 1rem;
  }
`;

export const CampaignList = styled.div`
  margin: 2.5rem 0;
`;

export const FilterContainer = styled.section`
  height: 4rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 1.5rem;
`;

export const InputContent = styled(Input)`
  height: 3rem;
`;

export const SelectContent = styled(Select)`
  height: 3rem;
`;

export const ButtonContent = styled(Button)`
  background: var(--green);
  height: 4rem;
  &:hover {
    color: var(--green);
    border-color: var(--green);
  }
`;
