import { Input } from 'components/Input/styles';
import React from 'react'
import { PageTitleContainer, Description } from "./styles";




export function Header({searchValue, handleChange}) {
  return (
    <PageTitleContainer>
      <img src="./images/logo.svg" alt="Logo" width="201" />
      <Description>Conheça as notas de leiturista </Description>
      <Input 
        placeholder="Pesquise pela NL (ex: embaçado)"
        value={searchValue}
        onChange={handleChange}
      />
    </PageTitleContainer>
  );
};

