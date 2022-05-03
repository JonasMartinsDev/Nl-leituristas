import styled from 'styled-components'

export const Container = styled.main`
 margin: 0 auto;
 max-width: 1200px;
 width: 100%;
 padding: 0 1rem;
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