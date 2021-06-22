import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "600px",
    padding: theme.spacing(8),
    overflow: "auto",
    color: ({ themeMode }) =>
      themeMode ? theme.palette.text.primary : theme.palette.error.light,

    "& label": {
      fontWeight: "normal",
    },

    "& .MuiInputBase-input": {
      width: "100%",
      background: ({ themeMode }) =>
        themeMode
          ? theme.palette.primary.light
          : theme.palette.secondary.background,
      color: ({ themeMode }) =>
        themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
      fontWeight: "bold",
    },
  },

  title: {
    marginBottom: theme.spacing(10),
  },

  colorText: {
    color: theme.palette.secondary.dark,
    marginBottom: theme.spacing(4),
  },

  input: {
    marginBottom: theme.spacing(3),
  },

  table: {
    display: "flex",
    flexDirection: "column",
  },

  header: {
    display: "flex",
    width: "inherit",
    justifyContent: "space-between",
    marginTop: theme.spacing(3),
  },

  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& div": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(2),
      height: "30px",
      background: ({ themeMode }) =>
        themeMode
          ? theme.palette.primary.light
          : theme.palette.secondary.background,
      color: ({ themeMode }) =>
        themeMode ? theme.palette.text.primary : theme.palette.text.secondary,

      "& p": { fontWeight: "bold" },
    },
  },

  name: {
    flexBasis: 0,
    flexGrow: 3,
    margin: theme.spacing(2, 2, 2, 0),
  },

  quantity: {
    flexBasis: 0,
    flexGrow: 1,
    margin: theme.spacing(2, 2, 2, 0),
  },

  price: {
    flexBasis: 0,
    flexGrow: 2,
    margin: theme.spacing(2, 2, 2, 0),
  },

  total: {
    flexBasis: 0,
    flexGrow: 2,
    margin: theme.spacing(2, 2, 2, 0),
    background: "transparent !important",
  },
  iconDelete: {
    flexBasis: 0,
    flexGrow: 0,
    cursor: "pointer",
  },

  streetAddressRoot: {
    display: "flex",
    flexDirection: "column",
    margin: ({ margin }) => margin,

    "& .MuiInputBase-input": {
      background: ({ themeMode }) =>
        themeMode
          ? theme.palette.primary.light
          : theme.palette.secondary.background,
      color: ({ themeMode }) =>
        themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
      fontWeight: "bold",
    },

    "& label": {
      fontWeight: "normal",
    },
  },

  streetAddress: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(4, 0),

    "& div": {
      flexBasis: "0",
      flexGrow: "1",
      maxWidth: "160px",
    },
  },

  addNewItem: {
    marginTop: theme.spacing(3),
    width: "100%",
    flex: "1",
  },

  discard: {
    flexBasis: "0",
    flexGrow: "0",
  },

  discardWrapper: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
  },

  saveWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexBasis: "0",
    flexGrow: "0",
  },

  issueDateAndPaymentTerms: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(3),
    "& div": { flexBasis: "0", flexGrow: "1" },
    "& p": { marginBottom: theme.spacing(1) },
  },

  paymentTerms: {
    "& .MuiInput-root": {
      width: "100%",
    },
  },

  datePicker: {
    "& div input": {
      height: "27.5px",
      border: "none",
      paddingLeft: theme.spacing(1),
      background: ({ themeMode }) =>
        themeMode
          ? theme.palette.primary.light
          : theme.palette.secondary.background,
      color: ({ themeMode }) =>
        themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
      fontWeight: "bold",
    },
  },

  dialogContent: {
    "& .MuiInputBase-input": {
      width: "100%",
      background: ({ themeMode }) =>
        themeMode
          ? theme.palette.primary.light
          : theme.palette.secondary.background,
      color: ({ themeMode }) =>
        themeMode ? theme.palette.text.primary : theme.palette.text.secondary,
      fontWeight: "bold",
    },

    "& label": {
      fontWeight: "normal",
    },
  },

  qtyPrice: {
    display: "flex",
    margin: theme.spacing(4, 0),
  },

  qtyItem: {
    width: "150px",
    marginRight: theme.spacing(3),
  },

  priceItem: {
    width: "150px",
  },

  inputAdornment: {
    paddingRight: theme.spacing(3),
    fontWeight: "bold !important",
  },

  cancelAndNewButton: {
    display: "flex",
    margin: theme.spacing(3, 0),
    justifyContent: "flex-end",
  },
}));
