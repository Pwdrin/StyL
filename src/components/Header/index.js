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
              src="https://media.discordapp.net/attachments/916163124682436679/1171138551782584390/logbat.png?ex=655b96c5&is=654921c5&hm=9f1e6a5f31cfd8c5b3b026c35ff4eac383dd83a7609642b7781a178a5cce9429&=&width=488&height=488"
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
