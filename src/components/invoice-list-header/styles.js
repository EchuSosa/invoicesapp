import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
  },

  left: {
    display: "flex",
    flexDirection: "column",
  },

  right: {
    display: "flex",
    alignItems: "center",
  },

  h1: {
    marginBottom: theme.spacing(3),
  },

  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "35px",
    height: "35px",
    borderRadius: "50px",
    background: "white",
  },
  button: {
    color: theme.palette.text.primary,
    backgroundColor: "#7C5DFA",
    "&:hover": {
      backgroundColor: "#9277FF",
    },
  },
}));
