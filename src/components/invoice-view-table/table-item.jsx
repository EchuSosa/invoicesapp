import React from "react";
import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";

const TableItem = ({ item = {} }) => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });
  return (
    <div className={classes.item}>
      <div>{item.name}</div>
      <div className={classes.textCenterCenterDiv}>{item.quantity}</div>
      <div className={classes.textRightCenterDiv}>£ {item.price}</div>
      <div className={classes.textRightCenterDiv}>£ {item.total}</div>
    </div>
  );
};

export default TableItem;
