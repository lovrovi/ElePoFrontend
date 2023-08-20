import React from 'react';
import { useForm } from 'react-hook-form';
import { FormInputText } from 'components/FormInputText/FormInputText';
import { Button, Grid, MenuItem } from '@mui/material';
import ControlledSelect from 'components/ControlledSelect/ControlledSelect';
import ControlledDatePicker from 'components/ControlledDatePicker/ControlledDatePicker';
import { useAddProcessor } from 'lib/api/processors/useAddProcessor';

const ProcessorCreate = () => {
  const { mutate: addProcessor } = useAddProcessor();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      manufacturerName: '',
      socket: '',
      releaseDate: '',
      numberOfCores: '',
      numberOfThreads: '',
      baseClockSpeed: '',
      boostClockSpeed: '',
      retailPrice: '',
      additionalInfo: '',
    },
  });

  const onProcessorSubmit = (data) => {
    addProcessor(data);
  };

  return (
    <Grid
      container
      spacing={4}
      width="60%"
      justifyContent="center"
      margin="auto"
    >
      <Grid item xs={6}>
        <FormInputText control={control} name="name" label="Name:" fullWidth />
      </Grid>
      <Grid item xs={6}>
        <ControlledSelect
          id="manufacturerName"
          name="manufacturerName"
          label="Manufacturer name:"
          control={control}
          variant="outlined"
          fullWidth
        >
          <MenuItem value="Intel">Intel</MenuItem>
          <MenuItem value="AMD">AMD</MenuItem>
        </ControlledSelect>
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="socket"
          label="Socket:"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <ControlledDatePicker
          control={control}
          name="releaseDate"
          label="Release date:"
        />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="numberOfCores"
          label="Number of cores:"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="numberOfThreads"
          label="Number of threads:"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="baseClockSpeed"
          label="Base clock speed:"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="boostClockSpeed"
          label="Boost clock speed:"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="retailPrice"
          label="Retail price:"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          control={control}
          name="additionalInfo"
          label="Addition info:"
          multiline
          rows={3}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Button onClick={handleSubmit(onProcessorSubmit)}>Submit</Button>
      </Grid>
    </Grid>
  );
};

export default ProcessorCreate;
