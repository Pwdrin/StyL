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
            <a>
              <RiInstagramFill />
            </a>
          </ol>
          <ol>
            <a>
              <RiPinterestFill />
            </a>
          </ol>
          <ol>
            <a>
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
