import * as Yup from "yup";

const createInvoice = (items) =>
  Yup.object({
    billFromStreetAddress: Yup.string().required("Required*"),
    billFromCity: Yup.string().required("Required*"),
    billFromPostCode: Yup.string().required("Required*"),
    billFromCountry: Yup.string().required("Required*"),
    billToClientName: Yup.string().required("Required*"),
    billToClientEmail: Yup.string()
      .email("Must be an email like email@email.com")
      .required("Required*"),
    billToStreetAddress: Yup.string().required("Required*"),
    billToCity: Yup.string().required("Required*"),
    billToPostCode: Yup.string().required("Required*"),
    billToCountry: Yup.string().required("Required*"),
    description: Yup.string().required("Required*"),
  });

export default createInvoice;
