import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 0.5rem;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: var(--heading);
    font-size: 1rem;
    margin: 0.5rem 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-popup .leaflet-popup-content button {
    width: 40px;
    height: 40px;
    border-radius: 0.5rem;
    background: var(--blue);
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;
