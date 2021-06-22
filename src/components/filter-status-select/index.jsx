import React, { useState } from "react";
import NativeSelect from "@material-ui/core/NativeSelect";

import { useStyles } from "./styles";
import { useTheme } from "../context/theme-context";
import { useFilterBy } from "../context/filter-by-context";

import IconArrowDown from "../../assets/icons/icon-arrow-down";

const Select = ({ options = [] }) => {
  const { themeMode } = useTheme();
  const { filterBy, setFilterBy } = useFilterBy();
  const classes = useStyles({ themeMode });

  const [state, setState] = useState({
    filterBy,
  });

  const handleChange = (event) => {
    const filterBy = event.target.name;
    setState({
      ...state,
      [filterBy]: event.target.value,
    });
    setFilterBy(event.target.value);
  };

  return (
    <NativeSelect
      value={filterBy}
      name="filterBy"
      onChange={handleChange}
      inputProps={{ "aria-label": "filterBy", IconComponent: IconArrowDown }}
      disableUnderline
      className={classes.select}
    >
      {options.map((option) => (
        <option
          key={option.id}
          value={option.id}
        >
          {option.name}
        </option>
      ))}
    </NativeSelect>
  );
};
export default Select;
