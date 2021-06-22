import React from "react";

import { useStyles } from "./styles";
import { useTheme } from "../../context/theme-context";

const NotFound = () => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });

  return (
    <div className={classes.container}>
      <h1>404</h1>
      <h2>PAGE NOT FOUND</h2>
    </div>
  );
};

export default NotFound;
