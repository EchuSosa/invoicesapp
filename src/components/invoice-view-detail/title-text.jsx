import React from "react";
import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";
import { Typography } from "@material-ui/core";

const TitleAndText = ({ title='Title', text='Text' }) => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });
  return (
    <div className={classes.titletext}>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="h3">{text}</Typography>
    </div>
  );
};

export default TitleAndText;
