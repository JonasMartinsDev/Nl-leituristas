import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2AA9E0",
      contrastText: '#0D1117'
    },
    secondary: {
      light: "#21262D",
      main: "#02E7D9",
    },
    text: {
      primary: "#707070",
      secondary: "#C9D1D9",
    },
    error: {
      main: "#C53030",
    },
    success: {
      main: "#00D34D",
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
