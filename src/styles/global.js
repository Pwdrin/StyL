import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
  }
`;

export default GlobalStyle;
