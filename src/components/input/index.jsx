import React from "react";
import { TextField } from "@material-ui/core";

const Input = ({
  label,
  value,
  placeholder,
  disabled = false,
  error = false,
  onChange = () => null,
  onBlur,
  onFocus,
  fullWidth = true,
  name,
  type = "text",
  errorMessage,
  success,
  startAdornment,
  variant = "outlined",
  multiline,
  rows,
  ...rest
}) => {

  return (
    <div>
      {label && <label>{label}</label>}
      <div>
        <TextField
          variant={variant}
          disabled={disabled}
          error={error}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          fullWidth={fullWidth}
          name={name}
          type={type}
          helperText={error && errorMessage}
          multiline={multiline}
          rows={rows}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
