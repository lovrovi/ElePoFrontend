import React from 'react';
import { Button, Typography, Box, CircularProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useForm } from 'react-hook-form';
import { FormInputText } from 'components/FormInputText/FormInputText';
import { useLogin } from 'lib/api/login/useLogin';

export default function Login() {
  const { mutate: login, isError, data } = useLogin();

  console.log(data?.headers.get('access-token'));

  const defaultValues = {
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

  const onSubmit = (data) => login(data);

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
        LOGIN
      </Typography>
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
          Invalid credentials
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
