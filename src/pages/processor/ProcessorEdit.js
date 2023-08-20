import { Box, Button, CircularProgress, Grid, MenuItem } from '@mui/material';
import ControlledDatePicker from 'components/ControlledDatePicker/ControlledDatePicker';
import ControlledSelect from 'components/ControlledSelect/ControlledSelect';
import { FormInputText } from 'components/FormInputText/FormInputText';
import { useGetProcessor } from 'lib/api/processors/useGetProcessor';
import { usePatchProcessor } from 'lib/api/processors/usePatchProcessor';
import { routes } from 'lib/router/Router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { generatePath, useNavigate, useParams } from 'react-router';

const ProcessorEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: processor, isLoading, isFetched } = useGetProcessor(id);
  const { mutate: patchProcessor } = usePatchProcessor(id, {
    onSuccess: () => navigate(generatePath(routes.PROCESSORS_DETAILS, { id })),
  });
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      defaultValues: {
        id: processor?.id || '',
        name: processor?.name || '',
        manufacturerName: processor?.manufacturerName || '',
        socket: processor?.socket || '',
        releaseDate: new Date(processor?.releaseDate).toJSON() || null,
        numberOfCores: processor?.numberOfCores || '',
        numberOfThreads: processor?.numberOfThreads || '',
        baseClockSpeed: processor?.baseClockSpeed || '',
        boostClockSpeed: processor?.boostClockSpeed || '',
        retailPrice: processor?.retailPrice || '',
        additionalInfo: processor?.additionalInfo || '',
      },
    },
  });

  useEffect(() => {
    if (isFetched)
      reset({
        ...processor,
        releaseDate: new Date(processor?.releaseDate).toJSON() || null,
      });
  }, [isFetched, reset, processor]);

  const onProcessorSubmit = (data) => {
    patchProcessor(data);
  };

  if (isLoading)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );

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

export default ProcessorEdit;
