import { styled } from "@material-ui/core";
import { TextField } from "@material-ui/core";

export const TextFieldStyled = styled(TextField)`
  .MuiInputBase-root {
    background-color: #090c10;
    align-items: center;

  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #1f242d;
    border-radius: 12px;
  }
`;
