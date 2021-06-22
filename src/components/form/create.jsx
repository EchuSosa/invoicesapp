import React, { useState, useRef } from "react";
import { Form, Formik } from "formik";
import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";
import { useInvoices } from "../context/invoices-context";
import { Typography, NativeSelect, InputAdornment } from "@material-ui/core";

import Button from "../buttons/default";
import TextInput from "../formik/input";
import Header from "./header-table";
import Item from "./item-table";
import Dialog from "../dialog";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import createInvoice from "../../validators/create-invoice";
import createItemValidation from "../../validators/create-item";
import getRandomId from "../../utils/getRandomId";
import InvoiceService from "../../services/invoiceServices";
import { INVOICE_STATUS } from "../../common/invoice-status";
import { useFilterBy } from "../context/filter-by-context";

const InvoiceForm = ({ title = "Title", setOpen }) => {
  const { themeMode } = useTheme();
  const classes = useStyles({ themeMode });
  const { setFilterBy } = useFilterBy();
  const { invoices, setInvoices } = useInvoices();
  const formRef = useRef();
  const formNewItemRef = useRef();
  const [items, setItems] = useState([]);
  const [createdAt, setCreatedAt] = useState(new Date());
  const [state, setState] = useState({
    paymentTerms: "30",
  });
  const [openDialog, setOpenDialog] = useState(false);

  const options = [
    { name: "Net 30 days", id: 30 },
    { name: "Net 14 days", id: 14 },
    { name: "Net 7 days", id: 7 },
    { name: "Net 1 days", id: 1 },
  ];

  const initialValues = {
    billFromStreetAddress: "",
    billFromCity: "",
    billFromPostCode: "",
    billFromCountry: "",
    billToClientName: "",
    billToClientEmail: "",
    billToStreetAddress: "",
    billToCity: "",
    billToPostCode: "",
    billToCountry: "",
    description: "",
  };

  const initialItemsValues = {
    itemName: "",
    itemQuantity: "",
    itemPrice: "",
  };

  const handleAddNewItem = () => {
    setOpenDialog(!openDialog);
  };

  const DialogContent = () => {
    return (
      <Formik
        onSubmit={createAddNewItem}
        initialValues={initialItemsValues}
        validationSchema={createItemValidation}
        innerRef={formNewItemRef}
      >
        <Form className={classes.dialogContent}>
          <TextInput label={"Name"} name="itemName" />
          <div className={classes.qtyPrice}>
            <TextInput
              label={"Quantity"}
              name="itemQuantity"
              type="number"
              className={classes.qtyItem}
            />
            <TextInput
              label={"Price"}
              name="itemPrice"
              className={classes.priceItem}
              InputProps={{
                startAdornment: (
                  <InputAdornment className={classes.inputAdornment}>
                    £{" "}
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.cancelAndNewButton}>
            <Button
              text={"Cancel"}
              onClick={() => setOpenDialog(!openDialog)}
              style={{ width: "150px", marginRight: "15px" }}
            />
            <Button
              text={"+ Add New Item"}
              backgroundColor={"#7C5DFA"}
              hoverColor={"#9277FF"}
              type="submit"
              style={{ width: "150px" }}
            />
          </div>
        </Form>
      </Formik>
    );
  };

  const getPaymentDue = () => {
    let date = new Date(createdAt);
    return date.setDate(date.getDate() + parseInt(state.paymentTerms));
  };

  const getTotal = () => {
    if (!!items.length) {
      let result = items.map(({ total }) => total);
      const sum = result.reduce((a, item) => {
        return parseFloat(a) + parseFloat(item);
      });
      return sum;
    } else return 0;
  };
  const createNewInvoice = (
    billFromStreetAddress,
    billFromCity,
    billFromPostCode,
    billFromCountry,
    billToClientName,
    billToClientEmail,
    billToStreetAddress,
    billToCity,
    billToPostCode,
    billToCountry,
    description,
    status
  ) => {
    const newInvoice = {
      id: getRandomId(),
      createdAt,
      paymentDue: getPaymentDue(),
      description,
      paymentTerms: parseInt(state.paymentTerms),
      clientName: billToClientName,
      clientEmail: billToClientEmail,
      status,
      senderAddress: {
        street: billFromStreetAddress,
        city: billFromCity,
        postCode: billFromPostCode,
        country: billFromCountry,
      },
      clientAddress: {
        street: billToStreetAddress,
        city: billToCity,
        postCode: billToPostCode,
        country: billToCountry,
      },
      items,
      total: getTotal(),
    };

    return newInvoice;
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleChange = (event) => {
    const paymentTerms = event.target.name;
    setState({
      ...state,
      [paymentTerms]: event.target.value,
    });
  };

  const createItem = () => {
    const { itemName, itemQuantity, itemPrice } = formNewItemRef.current.values;
    return {
      id: itemName + Math.floor(Math.random() * 9) + 1,
      name: itemName,
      quantity: itemQuantity,
      price: parseFloat(itemPrice.replace(",", ".")).toFixed(2),
      total: (itemQuantity * parseFloat(itemPrice.replace(",", "."))).toFixed(
        2
      ),
    };
  };

  const createAddNewItem = () => {
    const newItem = createItem();
    setItems([...items, newItem]);
    setOpenDialog(!openDialog);
  };

  const handleDiscard = () => {
    const { resetForm } = formRef.current;
    setItems([]);
    setCreatedAt(new Date());
    setState({
      paymentTerms: "30",
    });
    resetForm({
      billFromStreetAddress: "",
      billFromCity: "",
      billFromPostCode: "",
      billFromCountry: "",
      billToClientName: "",
      billToClientEmail: "",
      billToStreetAddress: "",
      billToCity: "",
      billToPostCode: "",
      billToCountry: "",
      description: "",
    });
    setOpen(false);
    //TODO reset all form
  };

  const handleDraft = () => {
    try {
      const {
        billFromStreetAddress,
        billFromCity,
        billFromPostCode,
        billFromCountry,
        billToClientName,
        billToClientEmail,
        billToStreetAddress,
        billToCity,
        billToPostCode,
        billToCountry,
        description,
      } = formRef.current.values;
      const { setSubmitting, resetForm } = formRef.current;
      const status = INVOICE_STATUS.DRAFT;
      const newInvoice = createNewInvoice(
        billFromStreetAddress,
        billFromCity,
        billFromPostCode,
        billFromCountry,
        billToClientName,
        billToClientEmail,
        billToStreetAddress,
        billToCity,
        billToPostCode,
        billToCountry,
        description,
        status
      );
      const created = InvoiceService.INSTANCE.create(newInvoice);
      if (created) {
        setSubmitting(false);
        setFilterBy("all");
        setInvoices([created, ...invoices]);
        setOpen(false);
        setCreatedAt(new Date());
        setState({
          paymentTerms: "30",
        });
        resetForm({
          billFromStreetAddress: "",
          billFromCity: "",
          billFromPostCode: "",
          billFromCountry: "",
          billToClientName: "",
          billToClientEmail: "",
          billToStreetAddress: "",
          billToCity: "",
          billToPostCode: "",
          billToCountry: "",
          description: "",
        });
      }
      //TODO add dialog with something was wrong
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (
    {
      billFromStreetAddress,
      billFromCity,
      billFromPostCode,
      billFromCountry,
      billToClientName,
      billToClientEmail,
      billToStreetAddress,
      billToCity,
      billToPostCode,
      billToCountry,
      description,
    },
    { setSubmitting, resetForm }
  ) => {
    try {
      const status = INVOICE_STATUS.PENDING;
      const newInvoice = createNewInvoice(
        billFromStreetAddress,
        billFromCity,
        billFromPostCode,
        billFromCountry,
        billToClientName,
        billToClientEmail,
        billToStreetAddress,
        billToCity,
        billToPostCode,
        billToCountry,
        description,
        status
      );
      const created = InvoiceService.INSTANCE.create(newInvoice);
      if (created) {
        setSubmitting(false);
        setFilterBy("all");
        setInvoices([created, ...invoices]);
        setOpen(false);
        setCreatedAt(new Date());
        setState({
          paymentTerms: "30",
        });
        resetForm({
          billFromStreetAddress: "",
          billFromCity: "",
          billFromPostCode: "",
          billFromCountry: "",
          billToClientName: "",
          billToClientEmail: "",
          billToStreetAddress: "",
          billToCity: "",
          billToPostCode: "",
          billToCountry: "",
          description: "",
        });
        //TODO add dialog with confirmation
      }

      //TODO add dialog with something was wrong
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Dialog
        open={openDialog}
        setOpen={setOpenDialog}
        title={"Add New Item"}
        children={<DialogContent />}
        showDialogActions={false}
      />
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant="h2">{title}</Typography>
        </div>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={createInvoice}
          innerRef={formRef}
        >
          <Form>
            <div className={classes.colorText}>
              <Typography variant="h4">Bill From</Typography>
            </div>
            <div className={classes.streetAddressRoot}>
              <div>
                <TextInput
                  label={"Street Address"}
                  name={"billFromStreetAddress"}
                />
              </div>
              <div className={classes.streetAddress}>
                <div>
                  <TextInput label={"City"} name={"billFromCity"} />
                </div>
                <div>
                  <TextInput label={"Post Code"} name={"billFromPostCode"} />
                </div>
                <div>
                  <TextInput label={"Country"} name={"billFromCountry"} />
                </div>
              </div>
            </div>
            <div className={classes.colorText}>
              <Typography variant="h4">Bill To</Typography>
            </div>
            <div className={classes.input}>
              <TextInput label={"Client's Name"} name={"billToClientName"} />
            </div>
            <div className={classes.input}>
              <TextInput label={"Client's Email"} name={"billToClientEmail"} />
            </div>
            <div className={classes.streetAddressRoot}>
              <div>
                <TextInput
                  label={"Street Address"}
                  name={"billToStreetAddress"}
                />
              </div>
              <div className={classes.streetAddress}>
                <div>
                  <TextInput label={"City"} name={"billToCity"} />
                </div>
                <div>
                  <TextInput label={"Post Code"} name={"billToPostCode"} />
                </div>
                <div>
                  <TextInput label={"Country"} name={"billToCountry"} />
                </div>
              </div>
            </div>
            <div className={classes.issueDateAndPaymentTerms}>
              <div className={classes.datePicker}>
                <Typography variant="body1">Issue Date</Typography>
                <DatePicker
                  selected={createdAt}
                  onChange={(date) => setCreatedAt(date)}
                  name={"datePicker"}
                />
              </div>
              <div className={classes.paymentTerms}>
                <Typography variant="body1">Payment Terms</Typography>
                <div>
                  <NativeSelect
                    value={state.paymentTerms}
                    name="paymentTerms"
                    onChange={handleChange}
                    inputProps={{
                      "aria-label": "paymentTerms",
                    }}
                    disableUnderline
                    className={classes.select}
                  >
                    {options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </NativeSelect>
                </div>
              </div>
            </div>
            <div className={classes.input}>
              <TextInput label={"Project Description"} name={"description"} />
            </div>
            <div className={classes.table}>
              <Typography variant="h3">Item List</Typography>
              <Header />
              {!!items?.length &&
                items.map((item) => {
                  return (
                    <Item
                      item={item}
                      key={item.id}
                      handleDelete={handleDeleteItem}
                    />
                  );
                })}
              <div className={classes.addNewItem}>
                <Button onClick={handleAddNewItem} text={"+ Add New Item"} />
              </div>
            </div>
            <div className={classes.discardWrapper}>
              <div className={classes.discard}>
                <Button
                  text={"Discard"}
                  backgroundColor={"#DFE3FA"}
                  hoverColor={"#F8F8FB"}
                  letterColor={"#888EB0"}
                  onClick={handleDiscard}
                />
              </div>
              <div className={classes.saveWrapper}>
                <Button text={"Save as Draft"} onClick={handleDraft} />
                <Button
                  text={"Save & Send"}
                  backgroundColor={"#7C5DFA"}
                  hoverColor={"#9277FF"}
                  type="submit"
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default InvoiceForm;
