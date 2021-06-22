import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";

import IllustrationEmpty from "../../assets/icons/illustration-empty";

const EmptyList = () => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });
  return (
    <div className={classes.root}>
      <div className={classes.illustration}>
        <IllustrationEmpty />
      </div>
      <Typography variant="h2"> There is Nothing here</Typography>
      <Typography variant="body1">Create an invoice clicking the</Typography>
      <Typography variant="body1">
        <b>New Invoice</b> button and get started
      </Typography>
    </div>
  );
};

export default EmptyList;
