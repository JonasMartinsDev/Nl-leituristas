import React from "react";

import {
  UserInformationContainer,
  UserName,
  UserDescription,
  Typography,
  Avatar
} from "./styles";


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
    <>
      <UserInformationContainer>
        <Avatar >{name}</Avatar>
        <UserName>{name}</UserName>
        {reading ? (
          <Typography className='success'>
            Com leitura
          </Typography>
        ) : (
          <Typography className={'error'}>
            Sem leitura
          </Typography>
        )}
        <UserDescription>{description}</UserDescription>

      </UserInformationContainer>
    </>
  );
};

export default UserInformation;
