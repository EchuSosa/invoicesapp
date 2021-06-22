import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  select: {
    marginRight: theme.spacing(7),
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
  },
}));
