import styled from "styled-components";
// eslint-disable-next-line
export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8));
    border-radius: 2rem;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: var(--heading);
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    border-radius: 12px;
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
