import React from "react";
import * as C from "./styles";
import {
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterXFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <C.Footer>
      {/* Conteúdo do cabeçalho */}
      <C.Nav>
        <C.NavIcons>
          <ol>
            <a href="https://www.instagram.com/legit.exe/">
              <RiInstagramFill />
            </a>
          </ol>
          <ol>
            <a href="https://i.pinimg.com/564x/cd/62/7c/cd627c87cfe9612e9eac32de491a4c5e.jpg">
              <RiPinterestFill />
            </a>
          </ol>
          <ol>
            <a href="https://twitter.com/ihLegit">
              <RiTwitterXFill />
            </a>
          </ol>
        </C.NavIcons>
        <C.Designed>
          <p>Copyright &copy;2023: Designed by</p>
          <C.DesignedText>Legit</C.DesignedText>
        </C.Designed>
      </C.Nav>
    </C.Footer>
  );
};

export default Footer;
