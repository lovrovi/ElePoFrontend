import { useMutation } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const register = (data) => {
  return axios.post('/register', data);
};

function useRegister(options) {
  return useMutation({
    mutationFn: register,
    mutationKey: 'register',
    ...options,
  });
}

export { useRegister };
