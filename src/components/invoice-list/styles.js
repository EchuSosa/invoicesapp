import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection:'column',
    justifyContent: "center",
    alignItems:'center',
    width: "100%",
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
  },

  illustration:{
    paddingBottom:theme.spacing(10),
  }
}));
