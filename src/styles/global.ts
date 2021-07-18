import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #EDF1F6;
    --background-gray: #EDF1F6;
    --background-purple: #754058;

    --white: #ffffff;
    --blue: #034074;
    --red: #D93636;
    --green: #51B853;
    --yellow: #F1EABE;
    --gray: #C4C4C4;
    --purple: #754058;
    --orange: #D94423;

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
    font-size: 62.5%;
    scroll-behavior: smooth;
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
`;

export default GlobalStyles;
