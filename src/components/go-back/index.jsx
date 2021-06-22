import React from "react";
import { generatePath, useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import routes from "../../routes/routes";

import IconArrowLeft from "../../assets/icons/icon-arrow-left";

const GoBack = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleInvoiceDetailView = () => {
    history.push(generatePath(routes.home));
  };

  return (
    <div className={classes.root}>
      <div className={classes.link} onClick={handleInvoiceDetailView}>
        <div className={classes.icon}>
          <IconArrowLeft />
        </div>
        <Typography variant="body2">Go back</Typography>
      </div>
    </div>
  );
};

export default GoBack;
