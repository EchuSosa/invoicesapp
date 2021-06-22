import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ThemeProvider as ThemeContextProvider } from "./components/context/theme-context";
import { InvoicesProvider } from "./components/context/invoices-context";
import { FilterByProvider } from "./components/context/filter-by-context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <InvoicesProvider>
        <FilterByProvider>
          <App />
        </FilterByProvider>
      </InvoicesProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
