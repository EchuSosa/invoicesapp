import React, { useState, createContext, useMemo, useContext } from "react";

const InvoicesContext = createContext();

export const InvoicesProvider = (props) => {
  const [invoices, setInvoices] = useState([]);

  const value = useMemo(() => {
    return {
        invoices,
        setInvoices,
    };
  }, [invoices]);

  return <InvoicesContext.Provider value={value} {...props} />;
};

export const useInvoices = () => {
  const context = useContext(InvoicesContext);
  if (!context) {
    throw new Error("useInvoices must be into InvoicesContext provider");
  }
  return context;
};
