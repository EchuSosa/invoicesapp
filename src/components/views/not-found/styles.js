import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexBasis: "0",
    flexGrow: "30",
    height: "100vh",
    background: ({ themeMode }) =>
      themeMode
        ? theme.palette.primary.background
        : theme.palette.secondary.background,
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
  },
  h1: {
    color: "white",
  },
  h2: {
    color: "white",
  },
}));
