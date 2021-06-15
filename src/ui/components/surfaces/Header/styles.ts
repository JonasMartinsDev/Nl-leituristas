import { styled } from "@material-ui/core";
import { AppBar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  background: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 100%;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 1.5rem;

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 2.8rem;
  }
`;
