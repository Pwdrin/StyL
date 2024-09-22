import styled from "styled-components";

export const Social = styled.div`
  background-color: #222327;
  width: 100%;
  height: 100vh; /* Adicionando altura de 100% da altura da viewport */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledH1 = styled.h1`
  text-align: center;
  font-style: italic;
  cursor: pointer;
  font-size: 150px;
  margin-top: 200px;
  margin-bottom: 450px;
  color: transparent;
  text-decoration: none;
  -webkit-background-clip: text;
  background-clip: none;
  background-image: linear-gradient(
    80deg,
    #48ff00,
    #488d21,
    #4cf771,
    #1b9410,
    #64d816
  );
  background-size: 400%;
  -webkit-box-reflect: below -1px -webkit-linear-gradient(transparent, #0004);
  animation: animate 20s linear infinite;

  @keyframes animate {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 300% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
