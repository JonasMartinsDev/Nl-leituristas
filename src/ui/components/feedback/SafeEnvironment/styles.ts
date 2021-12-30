import { styled } from "@material-ui/core/styles";

export const SafeEnvironmentContainer = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  font-size: 0.7rem;
`;
