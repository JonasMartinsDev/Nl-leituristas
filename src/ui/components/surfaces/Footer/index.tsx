import React from "react";
import { FooterStyled, FooterContainer, FooterTitle } from "./styles";
import { Typography, Box } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            NL-Leiturista te ajuda a encontrar as Notas de leiturista perfeita
            para cada situação de sua tarefa.
          </Typography>
        </Box>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
