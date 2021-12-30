import React from "react";
import { FooterStyled, FooterContainer } from "./styles";
import { Typography, Box, Link } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <Link href="https://meu-portfolio-lovat.vercel.app/"  variant='body1' color="inherit"> Developer by Jonas Martins </Link>
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
