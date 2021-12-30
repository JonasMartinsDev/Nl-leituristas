import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#37aee2",
      contrastText: '#090c10'
    },
    secondary: {
      light: "#1f242d",
      main: "#02E7D9",
    },
    text: {
      primary: "#eff2f6",
      secondary: "#93a1b6",
    },
    error: {
      main: "#e89797",
    },
    success: {
      main: "#1aff75",
    },
  },
  typography: {
    fontFamily: "Sora",
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
