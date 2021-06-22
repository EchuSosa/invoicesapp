import { useField } from 'formik';

import Input from '../input';

const TextInput = ({
  label,
  placeholder,
  fullWidth,
  className,
  type,
  name,
  rows,
  multiline,
  ...rest
}) => {
  const [field, meta] = useField(name);
  const { value, onChange, onBlur } = field;
  return (
    <Input
      label={label}
      placeholder={placeholder}
      fullWidth={fullWidth}
      className={className}
      type={type}
      error={meta.touched && meta.error}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      errorMessage={meta.error}
      success={value && !meta.error}
      rows={rows}
      multiline={multiline}
      {...rest}
    />
  );
};

export default TextInput;
