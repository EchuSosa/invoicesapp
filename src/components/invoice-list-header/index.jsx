import React, { useState } from "react";
import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";
import { Typography } from "@material-ui/core";

import FormMenu from "../form-menu";
import Form from "../form/create";
import Select from "../filter-status-select";
import Button from "../buttons/default";
import IconPlus from "../../assets/icons/icon-plus";

const options = [
  { name: "Filter by status", id: "all" },
  { name: "Paid", id: "paid" },
  { name: "Pending", id: "pending" },
  { name: "Draft", id: "draft" },
];

const InvoiceListHeader = ({ amount = 0 }) => {
  const { themeMode } = useTheme();
  const [open, setOpen] = useState(false);
  const classes = useStyles({ themeMode, open });

  const getSubtitle = () => {
    switch (amount) {
      case 0:
        return "No invoices";
      case 1:
        return `There is ${amount} total invoice`;
      default:
        return `There are ${amount} total invoices`;
    }
  };

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <Typography className={classes.h1} variant="h1">
          Invoices
        </Typography>
        <Typography variant="body1">{getSubtitle()}</Typography>
      </div>
      <div className={classes.right}>
        <Select
          text={"Filter by status"}
          options={options}
          className={classes.select}
        />
        <Button
          className={classes.button}
          onClick={handleMenu}
          text={"New Invoice"}
          startIcon={
            <div className={classes.icon}>
              <IconPlus />
            </div>
          }
        />
        <FormMenu open={open}>
          <Form title={"New Invoice"} setOpen={setOpen} />
        </FormMenu>
      </div>
    </div>
  );
};

export default InvoiceListHeader;
