import React from 'react'
import { PageTitleContainer, Description } from "./styles";




export function Header() {
  return (
    <PageTitleContainer>
      <img src="./images/logo.svg" alt="Logo" width="201" />
      <Description>Conheça as notas de leiturista </Description>
    </PageTitleContainer>
  );
};

