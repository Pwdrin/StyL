import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-image: url("https://media.discordapp.net/attachments/916163124682436679/1171129322296320071/background.login.jpg?ex=655b8e2c&is=6549192c&hm=55ac23b7d28c65725cb13b1c4053dae962f89ab0db32150a565090f29bcc1e96&=&width=781&height=488");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: transparent;
  background-color: #222327;
  border: 2px solid rgba(4, 202, 30, 0.692);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(4, 202, 30, 0.692);
  max-width: 350px;
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
`;

export const Label = styled.label`
  font-size: 36px;
  font-weight: 900;
  text-transform: uppercase;
  color: #35972a;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(53, 180, 33);
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #fff;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: #48ff00;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: rgba(4, 202, 30, 0.692);
  }
`;
