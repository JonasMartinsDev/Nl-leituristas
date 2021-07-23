import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      light: "#9661ff",
      main: "#5931A9",
      dark: "#581ECD",
      contrastText: '#0D1117'
    },
    secondary: {
      light: "#21262D",
      main: "#02E7D9",
      dark: "#1dd6cb",
    },
    text: {
      primary: "#707070",
      secondary: "#C9D1D9",
    },
    error: {
      main: "#C53030",
    },
    warning: {
      main: "#FCA600",
    },
    success: {
      main: "#00D34D",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F0F0F0",
      200: "#D7D9DD",
      300: "#C4C4C4",
      400: "#9B9B9B",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
  shape: {
    borderRadius: "3px",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: "white",
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 39px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
});

export default theme;
