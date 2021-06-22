import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1.5),
    marginBottom: theme.spacing(2.5),
    background: ({ themeMode }) =>
      themeMode
        ? theme.palette.primary.light
        : theme.palette.secondary.background,
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,

    "& *": {
      flexBasis: "0",
      flexGrow: "8",
    },
  },
  
  icon: {
    flexBasis: "0",
    flexGrow: "1",
    marginLeft: "15px",
    cursor: "pointer",
  },
}));
