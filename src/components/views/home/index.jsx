import React, { useEffect } from "react";

import { useInvoices } from "../../context/invoices-context";
import { useFilterBy } from "../../context/filter-by-context";
import InvoiceService from "../../../services/invoiceServices";

import Header from "../../invoice-list-header";
import InvoiceList from "../../invoice-list";
import Layout from "../../layouts/base-body";

const Home = () => {
  const { invoices, setInvoices } = useInvoices();
  const { filterBy } = useFilterBy();

  const setDataInvoices = () => {
    const invoices = InvoiceService.INSTANCE.getAll();
    if (filterBy !== "all" && invoices) {
      setInvoices(
        invoices.filter((invoices) => invoices?.status === filterBy)
      );
    } else {
      setInvoices(invoices);
    }
  };

  useEffect(() => {
    setDataInvoices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy]);

  return (
    <Layout>
      <Header amount={invoices?.length} />
      <InvoiceList invoices={invoices} />
    </Layout>
  );
};

export default Home;
