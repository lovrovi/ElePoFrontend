import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';

export const FormInputText = ({ name, control, label, size, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size={size || 'small'}
          error={!!error}
          onChange={onChange}
          value={value}
          label={label}
          {...props}
        />
      )}
    />
  );
};
