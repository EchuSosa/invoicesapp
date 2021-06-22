import React from "react";

import InvoiceRow from "../invoice-row";
import EmptyList from "./empty-list"

const InvoiceList = ({ invoices = [] }) => {
  return !!invoices.length ? (
    invoices.map((invoice) => <InvoiceRow invoice={invoice} key={invoice.id}/>)
  ) : (
    <EmptyList/>
  );
};

export default InvoiceList;
