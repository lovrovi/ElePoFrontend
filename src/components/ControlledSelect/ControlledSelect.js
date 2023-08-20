import React from 'react';
import { FormControl, InputLabel, Select } from '@mui/material';
import { Controller } from 'react-hook-form';

const ControlledSelect = ({
  name,
  label,
  control,
  defaultValue = '',
  children,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <FormControl {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        render={({ field: { value, onChange } }) => (
          <Select
            value={value}
            onChange={onChange}
            labelId={labelId}
            label={label}
          >
            {children}
          </Select>
        )}
        name={name}
        control={control}
        defaultValue={defaultValue}
      />
    </FormControl>
  );
};
export default ControlledSelect;
