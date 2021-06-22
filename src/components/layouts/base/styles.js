import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background: ({ themeMode }) =>
      themeMode
        ? theme.palette.primary.background
        : theme.palette.secondary.background,
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
  },
}));
