import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
    color: ({ letterColor, themeMode }) =>
      letterColor
        ? letterColor
        : themeMode
        ? theme.palette.text.primary
        : theme.palette.text.secondary,
    backgroundColor: ({ backgroundColor }) =>
      backgroundColor ? backgroundColor : theme.palette.primary.background,
    "&:hover": {
      backgroundColor: ({ hoverColor }) =>
        hoverColor ? hoverColor : theme.palette.info.main,
    },
  },
}));
