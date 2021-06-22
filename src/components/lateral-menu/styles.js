import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
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
