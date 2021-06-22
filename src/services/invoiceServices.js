import invoicesData from "../data.json";

export default class service {
  static INSTANCE = new service();

  invoices;

  constructor() {
    this.invoices = null;
  }

  getAll = () => {
    if (!this.invoices) {
      this.invoices = invoicesData;
    }
    return JSON.parse(JSON.stringify(this.invoices));
  };

  getById = (id) => {
    return (this.invoices.filter((invoice) => invoice.id === id))[0];
  };

  delete = (id) => {
    this.invoices = this.invoices.filter((invoice) => invoice.id !== id);
    return true;
  };

  create = (newInvoice) => {
    this.invoices = [newInvoice, ...this.invoices];
    return newInvoice;
  };

  update = (invoiceUpdated) => {
    const invoice = this.invoices.filter(
      (invoice) => invoice.id === invoiceUpdated.id
    );
    if (invoice) {
      this.invoices = this.invoices.filter(
        (invoice) => invoice.id !== invoiceUpdated.id
      );
      this.invoices = [invoiceUpdated, ...this.invoices];
      return true;
    } else {
      console.log("Invoice not found");
    }
  };
}
