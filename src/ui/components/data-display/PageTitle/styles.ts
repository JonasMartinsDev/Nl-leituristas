import { styled } from "@material-ui/core/styles";

export const PageTitleContainer = styled("div")`
  margin: ${({ theme }) => theme.spacing(5) + "" + 0};
  text-align: center;
`;

export const Title = styled("div")`
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 400;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;

export const Description = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5) + "" + "0"};
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: lighter;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
