import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #f7f7f7;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    color: #141414;
    font-size: 16px;
    font-family: 'Noto Sans JP', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
