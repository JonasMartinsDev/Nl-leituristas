import styled from 'styled-components'

export const Container = styled.div`
 width: 100%;
 height: 100vh;
 max-width: 1200px;
 margin: 0 auto;



 display: grid;
 grid-template-rows: 10rem auto;
 grid-template-areas:
  "header"
  "content"
  "footer"
  ;


  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 0 1rem;
  }
 
`

export const ContainerWrapper = styled.section`
  margin-top: 1rem;
  
  @media (min-width: 700px) {
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    gap: 1.4rem;
  }


  @media (min-width: 900px) {
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    gap: 1.4rem;
  }

`

export const ButtonWrapper = styled.div`
  text-align: center;
  width: 100%;
`

export const Button = styled.button`
  border: 0;
  padding: 0 1rem;
  background: #93a1b6;
  border-radius: 1rem;
  font-size: 2rem;
`