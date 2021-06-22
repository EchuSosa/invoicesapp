import React from "react";
import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";

import { Paper } from "@material-ui/core";

const FormMenu = ({open, children}) => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode, open });

  return <Paper className={classes.root}>{children}</Paper>;
};

export default FormMenu;
