import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexBasis: "0",
    flexGrow: "1",
    minHeight: "100vh",
    height: "inherit",
    background: theme.palette.primary.light,
    zIndex: "1500",
  },

  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },

  bottom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(3),
  },

  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4),
    background: "#9277FF",
    width: "100%",
  },

  divider: {
    width: "100%",
    border: "1px solid #858BB2",
  },

  button: {
    background: "none",
    color: "inherit",
    border: "none",
    padding: theme.spacing(0, 0, 1, 0),
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  },
}));
