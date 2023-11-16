import React, { useState } from "react";

import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IoIosCall, IoIosMail, IoIosPin } from "react-icons/io";

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { signout } = useAuth();

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("e", e.target);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);


    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    try {
      const request = await fetch("http://localhost:8080/index.php", {
        method: "POST",
        data: formData,
        "Content-Type": "application/x-www-form-urlencoded",
      });

      const response = request.body;
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
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
                <form
                  action="http://localhost:8080/index.php"
                  onSubmit={submitForm}
                  method="POST"
                >
                  <div className="input-box">
                    <p>{name}</p>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Digite seu nome"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <p>{email}</p>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Digite seu email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-box message-box">
                    <p>{message}</p>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Digite sua mensagem"
                      className="form-control"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="button">
                    <input
                      type="submit"
                      name="submit"
                      id="send"
                      value="Enviar"
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
