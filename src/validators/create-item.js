import * as Yup from "yup";

const createItem = () =>
  Yup.object({
    itemName: Yup.string().required("Required*"),
    itemQuantity: Yup.number("Must be a number").positive("Must be positive number").min(1,("Must be greater that or equal to 1")).required("Required*"),
    itemPrice: Yup.string().required("Required*"),
  });

export default createItem;