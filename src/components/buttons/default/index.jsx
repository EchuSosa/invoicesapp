import React from "react";
import { useStyles } from "./styles";
import { useTheme } from "../../context/theme-context";

import Button from "@material-ui/core/Button";

const IconButton = ({ text="Text", icon, backgroundColor, hoverColor, letterColor, ...rest }) => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode, backgroundColor, hoverColor, letterColor });

  return (
    <Button
      variant="contained"
      startIcon={icon && icon}
      className={classes.button}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default IconButton;
