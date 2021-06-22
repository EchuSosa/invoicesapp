import React from "react";
import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";

import IconDelete from "../../assets/icons/icon-delete";
import { Typography } from "@material-ui/core";

const Item = ({ item, handleDelete }) => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });
  const { id, name, quantity, price, total } = item;

  const handleDeleteItem = () => {
    handleDelete(id);
  };

  return (
    <div className={classes.item}>
      <div className={classes.name}>
        <Typography variant="body1">{name}</Typography>
      </div>
      <div className={classes.quantity}>
        <Typography variant="body1">{quantity}</Typography>
      </div>
      <div className={classes.price}>
        <Typography variant="body1">£ {price}</Typography>
      </div>
      <div className={classes.total}>
        <Typography variant="body1">£ {total}</Typography>
      </div>
      <span className={classes.iconDelete} onClick={handleDeleteItem}>
        <IconDelete />
      </span>
    </div>
  );
};

export default Item;
