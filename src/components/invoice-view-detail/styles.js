import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "400px",
    width: "100%",
    padding: theme.spacing(10),
    background: ({ themeMode }) =>
      themeMode ? theme.palette.primary.light : theme.palette.secondary.background,
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexBasis: 0,
    flexGrow: 1,
    minHeight: "100px",
  },
  middle: {
    display: "flex",
    flexBasis: 0,
    flexGrow: 1,
    width: "100%",
    "& div": {
      flexBasis: 0,
      flexGrow: 1,
      marginBottom: theme.spacing(3),
    },
  },
  bottom: { flexBasis: 0, flexGrow: 2 },

  idAndDescription: {
    flexDirection: "column",
    justifyContent: "center",
    "& span": { flexBasis: "0" },
  },

  address: {
    display: "flex",
    flexDirection: "column",
    "& p": {
      marginBottom: theme.spacing(0.5),
    },
  },

  titletext: {
    "& p": {
      marginBottom: theme.spacing(2),
    },
  },

  id: {
    color: theme.palette.info.main,
  },
}));
