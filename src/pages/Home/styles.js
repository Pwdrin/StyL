import styled from "styled-components";

export const Container = styled.div`
  /* Estilos para o container geral, se necessário */
  background-color: #222327;
`;

export const Normals1 = styled.div`
  background-color: #222327;
  width: 100vw;
  height: 130vh;
`;
export const Normals2 = styled.div`
width: 100vw;
height: 130vh;
top: 0;
left: 0;
overflow: hidden;
background: url("https://imgur.com/6PzodBH.jpg") no-repeat fixed center / contain;
background-size: 1920px;
`;
export const Normals3 = styled.div`
  background-color: #222327;
  width: 100vw;
  height: 120vh;
`;
export const Normals4 = styled.div`
  width: 100vw;
  height: 110vh;
  top: 0;
  left: 0;
  overflow: hidden;
  background: url("https://imgur.com/lezOAUg.jpg") no-repeat fixed center /
    contain;
  background-size: 1900px;
  
`;
export const Normals5 = styled.div`
  background-color: #222327;
  width: 100vw;
  height: 120vh;
`;
export const Normals6 = styled.div`
  width: 100vw;
  height: 130vh;
  top: 0;
  left: 0;
  overflow: hidden;
  background: url("https://imgur.com/3oXyYcV.jpg") no-repeat fixed center /
    contain;
  background-size: 1900px 2300px;
`;

export const wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #3ec20a;
    margin: 350px auto;
    width: 90%;
    font-size: 70px;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -2px;
    white-space: nowrap;
    word-spacing: 0;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
  }

  h3 {
    margin: 350px auto;
    text-align: center;
    line-height: 100px;
    cursor: pointer;
    color: transparent;
    text-transform: uppercase;
    font-size: 50px;
    text-decoration: none;
    -webkit-background-clip: text;
    background-clip: none;
    clip-path: none;
    background-image: linear-gradient(
      80deg,
      #48ff00,
      #488d21,
      #4cf771,
      #1b9410,
      #64d816
    );
    background-size: 400%;
    animation: animate 20s linear infinite;
  }

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

  /* Estilos responsivos */
  @media (max-width: 768px) {
    h2 {
      font-size: 40px;
    }

    h3 {
      font-size: 30px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 30px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;

export const h1 = styled.h1`
text-align: center;
    font-style: italic;
    cursor: pointer;
    font-size: 350px;
    margin-top: 40px;
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
  }

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

  @media (max-width: 768px) {
    padding-left: 250px;
    margin-bottom: 250px;
  }

  @media (max-width: 480px) {
    padding-left: 100px;
    margin-bottom: 100px;
  }
`;
export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  /* Outros estilos conforme necessário */
`;
