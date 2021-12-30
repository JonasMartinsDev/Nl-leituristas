import React from 'react'
import { PageTitleContainer, Title, Description } from "./styles";


type PageTitleProps = {
  description: string;
};

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <img src="./images/logo.svg" alt="Logo"  width="201"/>
      <Description> {props.description} </Description>
    </PageTitleContainer>
  );
};

export default PageTitle;
