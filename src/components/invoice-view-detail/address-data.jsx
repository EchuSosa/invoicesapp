import React from "react";
import { useStyles } from "./styles";

import { Typography } from "@material-ui/core";
const AddressData = ({ address }) => {
  const classes = useStyles();

  return (
    <div className={classes.address}>
      <Typography variant="body1">{address?.street}</Typography>
      <Typography variant="body1">{address?.city}</Typography>
      <Typography variant="body1">{address?.postCode}</Typography>
      <Typography variant="body1">{address?.country}</Typography>
    </div>
  );
};

export default AddressData;
