import React from "react";
import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";
import { Typography } from "@material-ui/core";

const Header = () => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });
  return (
    <div className={classes.header}>
      <div className={classes.name}>
        <Typography variant="body1">Item Name</Typography>
      </div>
      <div className={classes.quantity}> 
        <Typography variant="body1">Qty.</Typography>
      </div>
      <div className={classes.price}>
        <Typography variant="body1">Price</Typography>
      </div>
      <div className={classes.total}>
        <Typography variant="body1">Total</Typography>
      </div>
      <div className={classes.iconDelete}>
        <Typography variant="body1"></Typography>
      </div>
    </div>
  );
};

export default Header;
