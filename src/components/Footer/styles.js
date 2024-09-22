import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #131313;
  position: absolute;
  bottom: 0;
  width: 100%;
  position: relative;
`;

export const Nav = styled.nav``;

export const NavIcons = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: row;
  a {
    text-decoration: none;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #48ff00;
    margin: 10px;
    border-radius: 50%;
    font-size: 2em;
    color: black;
    opacity: 0.9;

    transition: background-color 0.5s, color 0.5s, opacity 0.5s;

    &:hover {
      background-color: #16171a;
      color: #48ff00;
      opacity: 0.7;
    }
  }
`;
export const Designed = styled.nav`
  background-color: #131313;
  padding: 20px;
  text-align: center;
  p {
    color: #48ff00;
  }
`;
export const DesignedText = styled.nav`
  color: #48ff00;
  opacity: 0.7;
  letter-spacing: 1px;
  font-weight: 400;
  margin: 5px;
`;
