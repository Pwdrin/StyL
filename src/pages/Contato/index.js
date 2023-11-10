import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IoIosCall, IoIosMail, IoIosPin } from "react-icons/io";
import axios from "axios";
const Contato = () => {
  const { signout } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (name.length === 0) {
      alert("Não deixe o nome vazio");
    } else if (email.length === 0) {
      alert("Não deixe o email vazio");
    } else if (message.length === 0) {
      alert("Não deixe a mensagem vazia");
    } else {
      const url = "http://localhost/send.php";

      let fData = new FormData();
      fData.append("name", name);
      fData.append("email", email);
      fData.append("message", message);

      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
  };

  return (
    <>
      <Header />
      <C.contact>
        <C.section>
          <div className="container2">
            <div className="content">
              <div className="left-side">
                <div className="address details">
                  <i>
                    <IoIosPin />
                  </i>
                  <div className="topic">Endereço</div>
                  <div className="text-one">Madureira, RJ</div>
                  <div className="text-two">Rio de Janeiro</div>
                </div>
                <div className="phone details">
                  <i>
                    <IoIosCall />
                  </i>
                  <div className="topic">Telefone</div>
                  <div className="text-one">+00 00 1234 5678</div>
                  <div className="text-two">+00 00 1234 5678</div>
                </div>
                <div className="email details">
                  <i>
                    <IoIosMail />
                  </i>
                  <div className="topic">Email</div>
                  <div className="text-one">$tylcontact@gmail.com</div>
                </div>
              </div>
              <div className="right-side">
                <div className="topic-text">Envie sua mensagem</div>
                <p>
                  Se você tiver algum trabalho artistico ou qualquer tipo de
                  dúvida relacionada ao nosso site, envie uma mensagem. Será um
                  prazer ajudá-lo(a).
                </p>
                <form method="post">
                  <div className="input-box">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Digite seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Digite seu email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-box message-box">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Digite sua mensagem"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="button">
                    <input
                      type="submit"
                      id="send"
                      value="Enviar"
                      onClick={handleSubmit}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </C.section>
      </C.contact>
      <Footer />
    </>
  );
};

export default Contato;
