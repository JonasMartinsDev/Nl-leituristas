import React, { useState } from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  Instruction,
  ModalContainer
} from "./styles";


import { Box, Button, Modal, Typography } from "@material-ui/core";

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

        {!!obervacao && (
          <>
            <Instruction onClick={handleOpen} >Instruções</Instruction>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ModalContainer>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Como usar?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {obervacao}
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Exemplo:
                  <img src={img} alt={obervacao} />
                </Typography>
              </ModalContainer>
            </Modal>
          </>
        )}
      </UserInformationContainer>
    </>
  );
};

export default UserInformation;
