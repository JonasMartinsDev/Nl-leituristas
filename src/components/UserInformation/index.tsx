import { ModalExample } from "components/ModalExample";
import React from "react";

import {
  UserInformationContainer,
  UserName,
  UserDescription,
  Instruction,
  Typography,
  Avatar
} from "./styles";


interface UserInformationProps {
  name: string;
  reading: boolean;
  description?: string;
  obervacao?: string;
  img?: string;
}



const UserInformation: React.FC<UserInformationProps> = ({
  name,
  description,
  reading,
  obervacao,
  img
}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

        {!!obervacao && (
          <>
            <Instruction onClick={handleOpen} >⇨Instruções⇦</Instruction>
            <ModalExample
              isOpen={open}
              img={img}
              onRequestClose={handleClose}
              obervacao={obervacao}
            />
          </>
        )}
      </UserInformationContainer>
    </>
  );
};

export default UserInformation;
