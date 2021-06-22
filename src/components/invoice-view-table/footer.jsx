import React from "react";
import { Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";

const Footer = ({ text = "Text", total }) => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });
  return (
    <div className={classes.footer}>
      <div>
        <Typography variant="h4">{text}</Typography>
      </div>
      <div>
        <Typography variant="h2">£ {total}</Typography>
      </div>
    </div>
  );
};

export default Footer;
