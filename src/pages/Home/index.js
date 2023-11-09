import React from "react";
import Button from "../../components/Button";
import * as C from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <C.Container>
        <C.wrap>
          <C.Normals1>
            <C.h1>$TyL</C.h1>
          </C.Normals1>
          <C.Normals2>
            <h2>Drip Too Hard</h2>
          </C.Normals2>
          <C.Normals3>
            <h3 style={{display:'flex', flexDirection: 'column',}}>Drip é o estilo que fala sem palavras.<Button href={'./Contato'} text='Entre Em Contato'/></h3>
          </C.Normals3>
          <C.Normals4>
            <h2>I feel like I'm Gucci Mane in 2006</h2>
          </C.Normals4>
          <C.Normals5>
            <h3 style={{display:'flex', flexDirection: 'column',}}>Sua roupa é a tela, seu estilo é a pintura.<Button href={'./Contato'} text='Saiba Mais'/></h3>
          </C.Normals5>
          <C.Normals6>
            <h2>Black Lives Matter</h2>
          </C.Normals6>
        </C.wrap>
      </C.Container>
      <Footer />
    </>
  );
};

export default Home;
