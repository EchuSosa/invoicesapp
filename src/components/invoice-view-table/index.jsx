import React from "react";
import { Paper } from "@material-ui/core";

import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";

import FooterTable from "./footer";
import HeaderTable from "./header";
import TableItem from "./table-item";

const InvoiceViewTable = ({ items = [], total = "0" }) => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });
  return (
    <Paper className={classes.root}>
      <HeaderTable />
      {items?.map((item, i) => (
        <TableItem key={item.name + i} item={item} />
      ))}
      <FooterTable text={"Amount Due"} total={total} />
    </Paper>
  );
};

export default InvoiceViewTable;
