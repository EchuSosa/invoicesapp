import React from "react";
import { Paper, Grid } from "@material-ui/core";

import { useStyles } from "./styles";
import { useTheme } from "../../context/theme-context";

const Base = ({ children }) => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });

  return (
    <Paper className={classes.root}>
      <Grid
        container
        className={classes.container}
      >
        {children}
      </Grid>
    </Paper>
  );
};

export default Base;
