import React from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <C.Header>
      <C.Nav>
        <C.Logo>
          <Link to="/Home" style={{ textDecoration: "none" }}>
            <C.LogoImage
              src="https://cdn.discordapp.com/attachments/852703179891015711/1287442565926228039/morcegos.png?ex=66f18fd3&is=66f03e53&hm=b0535b42e1c1823c0e4bf1804c6682003bd0651cd6d841b6c2a1b54caadc6ba2&"
              alt="logo"
            />
            <C.LogoText>$TyL</C.LogoText>
          </Link>
        </C.Logo>
        <C.NavLink>
          <ol>
            <a href="/Home">Home</a>
          </ol>
          <ol>
            <a href="/Shop">Loja</a>
          </ol>
          <ol>
            <a href="/Social">Social</a>
          </ol>
          <ol>
            <a href="/Contato">Contato</a>
          </ol>
        </C.NavLink>
      </C.Nav>
    </C.Header>
  );
};

export default Header;
