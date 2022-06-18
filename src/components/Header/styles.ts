import styled from "styled-components"

export const PageTitleContainer = styled.div`
  grid-area: header;
  margin-top: 1rem;
  text-align: center;
  width: 100%;

  @media (max-width:600px) {
    margin: 1rem 0;
    img {
      width: 140px;
    }
  }
`;

export const Description = styled.h3`
  font-weight: normal;
  font-size: 1em;
  margin-top: 0.4rem;
  letter-spacing: 0.02rem;


  @media (max-width:600px) {
   font-size: 10px;
  }
`;
