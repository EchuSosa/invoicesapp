import React from "react";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

const InvoiceId = ({ id }) => {
  const classes = useStyles();

  return (
    <Typography variant="body2">
      <span className={classes.id}>#</span>
      {id}
    </Typography>
  );
};

export default InvoiceId;
