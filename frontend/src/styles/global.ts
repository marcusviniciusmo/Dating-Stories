import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primaryColor: #9E2320;
    --secondaryColor: #F3DBC5;
    font-size: 62.5%; /* 10px = 1rem */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, button, input, textarea {
    font-family: sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  &:focus-visible {
    outline: 0;
  }
`;
