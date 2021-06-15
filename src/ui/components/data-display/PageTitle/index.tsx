import React from "react";

import { PageTitleContainer, Title, Description } from "./styles";

type PageTitleProps = {
  title: string;
  description?: string;
};

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <Title>{props.title}</Title>
      <Description> {props.description} </Description>
    </PageTitleContainer>
  );
};

export default PageTitle;
