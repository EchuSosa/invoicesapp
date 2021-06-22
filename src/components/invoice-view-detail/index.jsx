import React from "react";
import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";
import { Typography, Paper } from "@material-ui/core";

import AddressData from "./address-data";
import TitleText from "./title-text";
import InvoiceViewTable from "../invoice-view-table";

import formatDate from "../../utils/formatDate";

const InvoiceViewDetail = ({ invoice }) => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });

  return (
    <Paper className={classes.root}>
      <div className={classes.top}>
        <div className={classes.idAndDescription}>
          <Typography variant="h3">
            <span className={classes.id}>#</span>
            {invoice?.id}
          </Typography>
          <Typography variant="body1">{invoice?.description}</Typography>
        </div>
        <AddressData address={invoice?.senderAddress} />
      </div>
      <div className={classes.middle}>
        <div>
          <TitleText
            title={"Invoice Date"}
            text={formatDate(invoice?.createdAt)}
          />
          <TitleText
            title={"Payment Due"}
            text={formatDate(invoice?.paymentDue)}
          />
        </div>
        <div>
          <TitleText title={"Bill To"} text={invoice?.clientName} />
          <AddressData address={invoice?.clientAddress} />
        </div>
        <div>
          <TitleText title={"Send To"} text={invoice?.clientEmail} />
        </div>
      </div>
      <div className={classes.bottom}>
        <InvoiceViewTable items={invoice?.items} total={invoice?.total} />
      </div>
    </Paper>
  );
};

export default InvoiceViewDetail;
