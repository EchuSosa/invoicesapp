import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexBasis: "0",
    flexGrow: "30",
    padding: "5em 20em 0 20em",
    justifyContent: "center",
    background: ({ themeMode }) =>
      themeMode
        ? theme.palette.primary.background
        : theme.palette.secondary.background,
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  header: {
    width: "100%",
    background: ({ themeMode }) =>
      themeMode
        ? theme.palette.primary.background
        : theme.palette.secondary.background,
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
  },

  detail: {
    width: "100%",
    paddingTop: theme.spacing(4),
    background: ({ themeMode }) =>
      themeMode
        ? theme.palette.primary.background
        : theme.palette.secondary.background,
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
  },
}));
