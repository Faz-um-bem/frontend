import { createGlobalStyle } from 'styled-components';

import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #F6F6F6;
    --background-gray: #EDF1F6;
    --background-dark-gray: #A8A8B3;
    --background-purple: #754058;
    --background-yellow: #F1EABE;

    --white: #ffffff;
    --blue: #034074;
    --red: #D93636;
    --green: #51B853;
    --yellow: #F1EABE;
    --gray: #C4C4C4;
    --purple: #754058;
    --orange: #D93636;

    --heading: #034074;
    --text: #000000;
    --text-secondary: #617480;
    --text-white: #FFFFFF;
    --description: #A0ACB2;

    --background-disabled: #f5f5f5;
    --text-disabled: #ededed;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* font-size: 62.5%; */
    scroll-behavior: smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  html, body, #__next {
    height: 100%;
    background: var(--background);
    color: var(--text);
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Noto Sans', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  input, textarea {
    outline: none;
  }

  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
  ::-webkit-scrollbar-track {
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--blue);
  }

  .react-modal-overlay {
    background: #03407486;
    backdrop-filter: blur(1px);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: #EDF1F6;
    /* padding: 3rem; */
    position: relative;
    border-radius: 0.5rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    color: #A0ACB2;
  }
`;

export default GlobalStyles;
