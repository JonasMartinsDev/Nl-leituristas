import { styled } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

export const FormElementsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  max-width: 40rem;
  margin: 0 auto ${({ theme }) => theme.spacing(2)};

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const NlsPaper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(4)};
  margin: 0 auto ${({ theme }) => theme.spacing(10)};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};



  ${({ theme }) => theme.breakpoints.down("md")} {
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }
`;

export const NlsContainer = styled("div")`
  ${({ theme }) => theme.breakpoints.up("md")} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing(6)};
  }
`;
