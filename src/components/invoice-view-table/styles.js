import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    background: ({ themeMode }) =>
      themeMode ? theme.palette.primary.bg : theme.palette.secondary.main,
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    marginTop: theme.spacing(5),
    background: ({ themeMode }) =>
      themeMode ? theme.palette.primary.main : theme.palette.info.main,
  },

  header: {
    display: "flex",
    padding: theme.spacing(5),
    "& div": {
      flexBasis: "0",
      flexGrow: "1",
    },
  },

  item: {
    display: "flex",
    padding: theme.spacing(0, 5),
    "& div": {
      flexBasis: "0",
      flexGrow: "1",
      marginTop: theme.spacing(5),
    },
  },

  textAlignCenterDiv:{
    textAlign: "center"
  },

  textAlignRightDiv:{
    textAlign: "right"
  }
}));
