import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(3, 5),
    marginBottom: theme.spacing(2.5),
    background: ({ themeMode }) =>
      themeMode
        ? theme.palette.primary.light
        : theme.palette.secondary.background,
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
  },

  left: {
    display: "flex",
    alignItems: "center",
  },

  right: {
    display: "flex",
  },

  status: {
    marginLeft: theme.spacing(2),
    minWidth: "100px",
  },

  marginButton: { marginRight: theme.spacing(1) },
}));
