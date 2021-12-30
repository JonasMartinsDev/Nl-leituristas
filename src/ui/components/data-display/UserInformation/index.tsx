import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
} from "./styles";


import { Typography } from "@material-ui/core";

interface UserInformationProps {
  name: string;
  reading: boolean;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  description,
  reading,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled >{name}</AvatarStyled>
      <UserName>{name}</UserName>
      {reading ? (
        <Typography variant={"subtitle2"} color={"secondary"}>
          Com leitura
        </Typography>
      ) : (
        <Typography variant={"subtitle2"} color={"error"}>
          Sem leitura
        </Typography>
      )}
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
