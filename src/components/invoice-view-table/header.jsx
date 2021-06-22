import React from "react";
import { Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";

const HeaderTable = () => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });
  return (
    <div className={classes.header}>
      <div>
        <Typography variant="body1">Item Name</Typography>
      </div>
      <div>
        <Typography variant="body1">QTY</Typography>
      </div>
      <div className={classes.textRightCenterDiv}>
        <Typography variant="body1">Price</Typography>
      </div>
      <div className={classes.textRightCenterDiv}>
        <Typography variant="body1">Total</Typography>
      </div>
    </div>
  );
};

export default HeaderTable;
