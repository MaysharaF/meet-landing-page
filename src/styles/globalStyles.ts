import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --dark-cyan: #4D96A9;
    --soft-cyan: #8FE3F9;

    --dark-violet: #855FB1;
    --pale-violet: #D9B8FF;

    --very-dark-grayish-blue: #28283d;
    --grayish-blue: #87879D;
    --light-gray: #FAFAFA;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    background-color: var(--light-gray);
  }

  body, input, button {
    font: 15px Overpass, sans-serif;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
  }
`;