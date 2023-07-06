import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormInputText } from 'components/FormInputText/FormInputText';
import { Grid } from '@mui/material';

const ProcessorDetailsDisplay = ({ processor, isFetched }) => {
  const { control, reset } = useForm({
    defaultValues: {
      id: processor?.id || '',
      name: processor?.name || '',
      manufacturerName: processor?.manufacturerName || '',
      socket: processor?.socket || '',
      releaseDate: processor?.releaseDate || '',
      numberOfCores: processor?.numberOfCores || '',
      numberOfThreads: processor?.numberOfThreads || '',
      baseClockSpeed: processor?.baseClockSpeed || '',
      boostClockSpeed: processor?.boostClockSpeed || '',
      retailPrice: processor?.retailPrice || '',
      additionalInfo: processor?.additionalInfo || '',
    },
  });

  useEffect(() => {
    if (isFetched) reset(processor);
  }, [isFetched, reset, processor]);

  return (
    <Grid container spacing={4} width="50%" justifyContent="center">
      <Grid item xs={6}>
        <FormInputText control={control} name="name" label="Name:" disabled />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="manufacturerName"
          label="Manufacturer name:"
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="socket"
          label="Socket:"
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="releaseDate"
          label="Release date:"
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="numberOfCores"
          label="Number of cores:"
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="numberOfThreads"
          label="Number of threads:"
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="baseClockSpeed"
          label="Base clock speed:"
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="boostClockSpeed"
          label="Boost clock speed:"
          disabled
        />
      </Grid>
      <Grid item xs={6}>
        <FormInputText
          control={control}
          name="retailPrice"
          label="Retail price:"
          disabled
        />
      </Grid>
      <Grid item xs={12}>
        <FormInputText
          control={control}
          name="additionalInfo"
          label="Addition info:"
          disabled
          multiline
          rows={3}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default ProcessorDetailsDisplay;
