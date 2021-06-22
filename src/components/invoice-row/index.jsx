import React from "react";
import { generatePath, useHistory } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";
import formatDate from "../../utils/formatDate";
import getButtonColor from "../../utils/getButtonColor";
import getLetterButtonColor from "../../utils/getLetterButtonColor";
import routes from "../../routes/routes";

import IconArrowRight from "../../assets/icons/icon-arrow-right";
import ButtonStatus from "../buttons/status";
import InvoiceId from "../invoice-id";

const InvoiceRow = ({ invoice }) => {
  const { id, paymentDue, clientName, total, status } = invoice;
  const { themeMode } = useTheme();
  const buttonColor = getButtonColor(status);
  const buttonLetterColor = getLetterButtonColor(status);
  const classes = useStyles({ themeMode });
  const history = useHistory();

  const handleInvoiceDetailView = () => {
    history.push(generatePath(routes.invoice, { id }));
  };

  return (
    <Paper className={classes.root}>
      <InvoiceId id={id} />
      <div className={classes.paymentDue}>Due {formatDate(paymentDue)}</div>
      <div className={classes.clientName}>{clientName}</div>
      <div className={classes.total}>
        <Typography variant="h3">£ {total}</Typography>
      </div>
      <ButtonStatus
        buttonColor={buttonColor}
        buttonLetterColor={buttonLetterColor}
        text={status}
      />
      <div className={classes.icon} onClick={handleInvoiceDetailView}>
        <IconArrowRight />
      </div>
    </Paper>
  );
};

export default InvoiceRow;
