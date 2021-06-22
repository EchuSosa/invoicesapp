import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: ({ buttonColor }) => buttonColor,
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "100px",
  },

  p: {
    color: ({ buttonLetterColor }) => buttonLetterColor,
    textTransform: "capitalize",
  },
}));
