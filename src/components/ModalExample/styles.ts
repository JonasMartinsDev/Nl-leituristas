import styled from "styled-components";


export const Container = styled.div`
 max-width: 600px;
 width: 100%;


@media (max-width: 600px) {
  img {
    width: 20rem;
    object-fit:cover;
  }
}

 p {
   font-size: 0.8rem;
   margin-bottom: 1rem;
 }
`