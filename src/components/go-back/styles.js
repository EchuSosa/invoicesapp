import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: theme.spacing(3),
  },

  link: {
    display: "flex",
    cursor: "pointer",
    maxWidth:'120px',
  },

  icon: { paddingRight: theme.spacing(5) },
}));
