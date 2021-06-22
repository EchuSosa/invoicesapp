import React, { useState, createContext, useMemo, useContext } from "react";

const FilterByContext = createContext();

export const FilterByProvider = (props) => {
  const [filterBy, setFilterBy] = useState("all");

  const value = useMemo(() => {
    return {
      filterBy,
      setFilterBy,
    };
  }, [filterBy]);

  return <FilterByContext.Provider value={value} {...props} />;
};

export const useFilterBy = () => {
  const context = useContext(FilterByContext);
  if (!context) {
    throw new Error("useFilterBy must be into FilterByContext provider");
  }
  return context;
};
