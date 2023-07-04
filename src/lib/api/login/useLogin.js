import { useMutation } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const login = (data) => {
  return axios.post('/login', data);
};

function useLogin() {
  return useMutation({
    mutationFn: login,
    mutationKey: 'login',
    onSuccess: (data) =>
      localStorage.setItem('token', data?.headers.get('access-token')),
  });
}

export { useLogin };
