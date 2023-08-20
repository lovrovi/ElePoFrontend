import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useGetAllProcessors } from 'lib/api/processors/useGetAllProcessors';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SelectProcessor = ({ currentProcessorId }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data: processors } = useGetAllProcessors();

  const onChange = (e) => {
    searchParams.set('rightId', e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <FormControl sx={{ width: '30%' }}>
      <InputLabel id="select-label">
        Select another processor for comparison
      </InputLabel>
      <Select
        labelId="select-label"
        id="select"
        label="Age"
        onChange={onChange}
      >
        {processors
          ?.filter((proc) => proc.id != currentProcessorId)
          .map((proc, i) => {
            return (
              <MenuItem key={i} value={proc.id}>
                {proc.name}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};

export default SelectProcessor;
