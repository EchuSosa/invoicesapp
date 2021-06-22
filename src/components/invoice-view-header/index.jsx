import React, { useState } from "react";
import { generatePath, useHistory } from "react-router-dom";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";
import { useInvoices } from "../context/invoices-context";

import getButtonColor from "../../utils/getButtonColor";
import getLetterButtonColor from "../../utils/getLetterButtonColor";
import routes from "../../routes/routes";

import ButtonStatus from "../buttons/status";
import Button from "../buttons/default";
import GoBack from "../go-back";
import Dialog from "../dialog";
import FormMenu from "../form-menu";
import Form from "../form/edit";

import InvoiceService from "../../services/invoiceServices";
import { INVOICE_STATUS } from "../../common/invoice-status";

const InvoiceViewHeader = ({ invoice }) => {
  const { themeMode } = useTheme();
  const { setInvoices } = useInvoices();
  const classes = useStyles({ themeMode });
  const history = useHistory();
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);

  const buttonColor = getButtonColor(invoice?.status);
  const buttonLetterColor = getLetterButtonColor(invoice?.status);

  const handleMenu = () => {
    setOpen(!open);
  };

  const handleDelete = () => {
    setOpenDialog(true);
  };

  const handleRemove = () => {
    const updatedInvoice = InvoiceService.INSTANCE.delete(invoice?.id);
    if (updatedInvoice) {
      setInvoices(InvoiceService.INSTANCE.getAll());
      history.push(generatePath(routes.home));
    }
  };

  const handleMarkAsPaid = () => {
    if (invoice.status === INVOICE_STATUS.PENDING) {
      invoice.status = INVOICE_STATUS.PAID;
      const updatedInvoice = InvoiceService.INSTANCE.update(invoice);
      if (updatedInvoice) {
        setInvoices(InvoiceService.INSTANCE.getAll());
      }
    }
  };

  const DialogContent = () => {
    return (
      <>
        <Typography variant="body1">
          Are you sure you want to delete invoice #{invoice.id}?{" "}
        </Typography>
        <Typography variant="body1">This action cannot be undone</Typography>
      </>
    );
  };

  return (
    <>
      <Dialog
        open={openDialog}
        setOpen={setOpenDialog}
        title={"Confirm Deletion"}
        children={<DialogContent />}
        onClick={handleRemove}
      />
      <GoBack />
      <Paper className={classes.root}>
        <div className={classes.left}>
          <div>
            <Typography variant={"body2"}>Status</Typography>
          </div>
          <div className={classes.status}>
            <ButtonStatus
              buttonColor={buttonColor}
              buttonLetterColor={buttonLetterColor}
              text={invoice?.status}
            />
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.marginButton}>
            <Button
              text={"Edit"}
              disabled={invoice?.status !== INVOICE_STATUS.DRAFT}
              onClick={handleMenu}
            />
          </div>
          <div className={classes.marginButton}>
            <Button
              text={"Delete"}
              backgroundColor={"#EC5757"}
              hoverColor={"#EA899A"}
              onClick={handleDelete}
            />
          </div>
          <Button
            text={"Mark as Paid"}
            backgroundColor={"#7C5DFA"}
            hoverColor={"#9277FF"}
            onClick={handleMarkAsPaid}
            disabled={invoice?.status !== INVOICE_STATUS.PENDING}
          />
        </div>
        <FormMenu open={open}>
          <Form title={`Edit #${invoice?.id}`} setOpen={setOpen} invoice={invoice} />
        </FormMenu>
      </Paper>
    </>
  );
};

export default InvoiceViewHeader;
