import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  spacing: 10,
  palette: {
    primary: {
      main: "#E5E5E5",
    },
    secondary: {
      main: "#363636",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
