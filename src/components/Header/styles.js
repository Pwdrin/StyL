import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 300% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

export const Header = styled.header`
  // Adicione estilos gerais do cabeçalho aqui
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;

  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 8px;
  }

  @media (max-width: 320px) {
    font-size: 6px;
  }
`;

export const LogoImage = styled.img`
  width: 40px;
  height: auto;
  margin-right: 10px;

  @media (min-width: 768px) {
    width: 60px;
  }

  @media (max-width: 600px) {
    width: 30px;
  }

  @media (max-width: 320px) {
    width: 20px;
  }
`;

export const LogoText = styled.span`
  font-style: italic;
  font-weight: 600;
  cursor: pointer;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: none;
  background-image: linear-gradient(
    80deg,
    #48ff00,
    #488d21,
    #4cf771,
    #1b9410,
    #64d816
  );
  background-size: 400%;
  animation: ${animate} 20s linear infinite;

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #131212;
  padding: 15px 6%;

  @media (min-width: 768px) {
    padding: 20px 12%;
  }

  @media (max-width: 600px) {
    padding: 10px 4%;
  }

  @media (max-width: 320px) {
    padding: 5px 2%;
  }
`;

export const NavLink = styled.a`
  display: flex;
  gap: 2.5em;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 5px 0;
  margin: 0px 20px;
  transition: all 0.5s ease;
  cursor: pointer;

  a {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 5px 0;
    margin: 0px 20px;
    transition: all 0.5s ease;
    text-decoration: none;

    &:hover {
      color: #48ff00;
    }
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin: 0px 30px;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    margin: 0px 15px;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
    margin: 0px 10px;
  }
`;
