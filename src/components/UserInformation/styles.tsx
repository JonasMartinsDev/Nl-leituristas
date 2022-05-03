import styled from "styled-components";


export const UserInformationContainer = styled.div`
  & + &  {
      margin-top: 10px
    }
  
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);

  grid-template-areas:
  "avatar name"
  "avatar rating"
  "avatar description"
  "instrucao  instrucao";

  padding: 1rem;
  gap: 0.6rem  0.8rem;

`

export const UserName = styled.div`
  grid-area: name;
  color: #eff2f6;
`


export const Avatar = styled.div`
 grid-area: avatar;
 width: 60px; 
 height: 60px; 
 border-radius: 50%;
 background-color: #1f242d;
 font-weight: bold;

 display: flex;
 justify-content: center;
 align-items: center;
`

export const UserDescription = styled.div`
  grid-area: description;
  color: #93a1b6;
  font-size: 0.9rem;
`


export const Instruction = styled.button`
 grid-area: instrucao;

 border: 0;
 background: transparent;
 color:#e89797;
`



export const Typography = styled.h2`
 font-size: 0.9rem;
 font-weight: normal;

 &.error  {
  color: #e89797;
 }

 &.success {
  color: #00E65B;

 }
 
`