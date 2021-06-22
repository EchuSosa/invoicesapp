import React from "react";
import { useStyles } from "./styles";

const StatusButton = ({
  text = "Text",
  buttonColor = "rgb(12, 14, 22, 0.3)",
  buttonLetterColor = "rgb(12, 14, 22)",
}) => {
  const classes = useStyles({ buttonColor, buttonLetterColor });
  return (
    <div className={classes.button}>
      <p className={classes.p}>• {text}</p>
    </div>
  );
};

export default StatusButton;
