import styled from "styled-components";


export const FooterStyled = styled.footer`
  grid-area: footer;
  text-align: center;
  padding: 2rem 0;
  margin: 0  auto;

`;

export const FooterContainer = styled.div`
  display: flex; 
  flex-direction: column;
  padding: 0 1rem;
  gap: 1rem;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }

  p {
    color: #93a1b6
  }

  @media (max-width: 600px) {
   p, a {
    font-size: 10px;
   }
  }
`;




