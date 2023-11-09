import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { IoIosLock, IoIosMail } from "react-icons/io";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }
    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Content>
        <C.Label>Login</C.Label>
        <Input
  type="email"
  placeholder="Digite seu E-mail"
  value={email}
  onChange={(e) => { setEmail(e.target.value); setError(""); }}
  icon={<IoIosMail size={20} color='#3ec20a' />}
/>
<Input
  type="password"
  placeholder="Digite sua Senha"
  minLength={6}
  value={senha}
  onChange={(e) => { setSenha(e.target.value); setError(""); }}
  icon={<IoIosLock size={20} color='#3ec20a' />}
/>
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;
