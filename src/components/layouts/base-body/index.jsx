import React from "react";
import { Grid } from "@material-ui/core";

import { useStyles } from "./styles";
import { useTheme } from "../../context/theme-context";

const BaseBody = ({ children }) => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems="center"
        direction="column"
        className={classes.container}
      >
        {children?.length > 1  && (
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.header}
          >
            {children[0]}
          </Grid>
        )}
        {children?.length === 2 && (
          <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.detail}
          >
            {children[1]}
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default BaseBody;
