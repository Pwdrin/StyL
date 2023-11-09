import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick,text,href, Type = "button" }) => {
  return (
    <a href={href}>
    <C.Button  type={Type} onClick={onClick}>
      {text}
    </C.Button>
    </a>
  );
};

export default Button;
