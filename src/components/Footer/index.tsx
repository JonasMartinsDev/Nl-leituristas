import React from "react";
import { FooterStyled, FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>

        <p >
          NL-Leiturista te ajuda a encontrar as Notas de leiturista perfeita
          para cada situação de sua tarefa.
        </p>
        <a href="https://meu-portfolio-lovat.vercel.app/"> Developer by Jonas Martins </a>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
