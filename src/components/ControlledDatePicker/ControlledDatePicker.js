import React from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Controller } from 'react-hook-form';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const ControlledDatePicker = ({ control, name, label, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={label}
            value={dayjs(value)}
            onChange={onChange}
            {...props}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default ControlledDatePicker;
