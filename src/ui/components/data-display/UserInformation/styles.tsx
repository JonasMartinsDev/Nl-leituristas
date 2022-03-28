import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Avatar, Button, Modal, Rating } from "@material-ui/core";
import { Box } from "@material-ui/system";

export const UserInformationContainer = styled("div")`
  
  & + &  {
    margin-top: 10px
  }

  display: grid;
  position: relative;
  border-radius: 100px 20px 20px 100px;
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);
   grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description"
    "instrucao  instrucao";
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(1) + " " + theme.spacing(2)};
  transition: 1s ease-out;

  &:hover {
    background-color:  ${({ theme }) => theme.palette.secondary.light}
  }
`;

export const UserName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;
export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.palette.secondary.light};

`;

export const UserDescription = styled("div")`
  grid-area: description;
  display: flex;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export const RatingStyled = styled(Rating)`
  grid-area: rating;
  font-size: 14px;
`;

export const Instruction = styled(Button)`
 grid-area: instrucao;
`

export const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  width: 100%;

  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 24px;


  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 300px;
  }

  img {
    margin-top: 10px;
    width: 100%;
  }

`