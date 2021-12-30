import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Avatar, Rating } from "@material-ui/core";

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
    "avatar description";
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
