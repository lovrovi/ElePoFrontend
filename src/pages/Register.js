import React from 'react';
import { Button, Typography, Box, CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useForm } from 'react-hook-form';
import { FormInputText } from 'components/FormInputText/FormInputText';
import { useRegister } from 'lib/api/login/useRegister';
import { generatePath, useNavigate } from 'react-router';
import { routes } from 'lib/router/Router';

export default function Register() {
  const navigate = useNavigate();

  const { mutate: register, isError } = useRegister({
    onSuccess: () => navigate(generatePath(routes.LOGIN)),
  });

  const defaultValues = {
    username: '',
    email: '',
    password: '',
  };

  const {
    handleSubmit,
    control,
    formState: { isLoading },
  } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => register(data);

  return (
    <Paper
      style={{
        display: 'grid',
        gridRowGap: '20px',
        padding: '20px',
        width: '40%',
        margin: 'auto',
      }}
    >
      <Typography variant="h5" sx={{ textAlign: 'center' }}>
        Register
      </Typography>
      <FormInputText
        name="username"
        label="Username: "
        variant="standard"
        control={control}
      />
      <FormInputText
        name="email"
        label="Email: "
        variant="standard"
        control={control}
      />
      <FormInputText
        name="password"
        label="Password: "
        type="password"
        variant="standard"
        control={control}
      />
      {isError && (
        <Typography variant="body2" sx={{ textAlign: 'center', color: 'red' }}>
          Username already exists.
        </Typography>
      )}
      <Button onClick={handleSubmit(onSubmit)}>Log in</Button>
      {isLoading && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
    </Paper>
  );
}
