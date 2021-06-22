import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: "70px",
    minWidth: "500px",
    minHeight: "100vh",
    height:'100%',
    //overflow: "auto",
    background: ({ themeMode }) =>
      themeMode ? theme.palette.primary.bg : theme.palette.success.light,
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
    display: ({ open }) => (open ? "inherit" : "none"),
  },
}));
