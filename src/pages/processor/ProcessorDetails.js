import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Box, CircularProgress, Stack } from '@mui/material';
import { useGetProcessor } from 'lib/api/processors/useGetProcessor';
import { FormInputText } from 'components/FormInputText/FormInputText';
import { useForm } from 'react-hook-form';

const ProcessorDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isFetched } = useGetProcessor(id);
  // console.log(data);

  const { control, reset } = useForm({
    defaultValues: {
      id: data?.id || '',
      name: data?.name || '',
      manufacturerName: data?.manufacturerName || '',
      socket: data?.socket || '',
      releaseDate: data?.releaseDate || '',
      numberOfCores: data?.numberOfCores || '',
      numberOfThreads: data?.numberOfThreads || '',
      baseClockSpeed: data?.baseClockSpeed || '',
      boostClockSpeed: data?.boostClockSpeed || '',
      retailPrice: data?.retailPrice || '',
      additionalInfo: data?.additionalInfo || '',
    },
  });

  useEffect(() => {
    if (isFetched) reset(data);
  }, [isFetched, reset, data]);

  if (isLoading)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Stack spacing={2} alignItems="center">
      <FormInputText control={control} name="name" label="Name:" disabled />
      <FormInputText
        control={control}
        name="manufacturerName"
        label="Manufacturer name:"
        disabled
      />
      <FormInputText control={control} name="socket" label="Socket:" disabled />
      <FormInputText
        control={control}
        name="releaseDate"
        label="Release date:"
        disabled
      />
      <FormInputText
        control={control}
        name="numberOfCores"
        label="Number of cores:"
        disabled
      />
      <FormInputText
        control={control}
        name="numberOfThreads"
        label="Number of threads:"
        disabled
      />
      <FormInputText
        control={control}
        name="baseClockSpeed"
        label="Base clock speed:"
        disabled
      />
      <FormInputText
        control={control}
        name="boostClockSpeed"
        label="Boost clock speed:"
        disabled
      />
      <FormInputText
        control={control}
        name="retailPrice"
        label="Retail price:"
        disabled
      />
      <FormInputText
        control={control}
        name="additionalInfo"
        label="Addition info:"
        disabled
        multiline
        rows={3}
      />
    </Stack>
  );
};

export default ProcessorDetails;
