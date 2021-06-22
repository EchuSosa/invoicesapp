/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import InvoiceService from "../../../services/invoiceServices";

import Header from "../../invoice-view-header";
import InvoiceDetail from "../../invoice-view-detail";
import Layout from "../../layouts/base-body";

const Home = () => {
  const [invoice, setInvoice] = useState({});
  const invoiceParams = useLocation();
  const invoiceParamsArray = invoiceParams.pathname.split("/");
  const invoiceId = invoiceParamsArray[invoiceParamsArray.length - 1];


  useEffect(() => {
    const invoice = InvoiceService.INSTANCE.getById(invoiceId);
    if (invoice) {
      setInvoice(invoice);
    }  
  }, []);

  return (
    <Layout>
      <Header invoice={invoice} />
      <InvoiceDetail invoice={invoice} />
    </Layout>
  );
};

export default Home;
