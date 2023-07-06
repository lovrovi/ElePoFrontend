import { useMutation } from '@tanstack/react-query';
import { generatePath } from 'react-router';
import axios from 'lib/api/axiosConfig';
import { routes } from 'lib/router/Router';

const login = (data) => {
  return axios.post('/login', data);
};

function useLogin(navigate) {
  return useMutation({
    mutationFn: login,
    mutationKey: 'login',
    onSuccess: (data) => {
      localStorage.setItem('token', data?.headers.get('access-token'));
      navigate(generatePath(routes.PROCESSORS));
    },
  });
}

export { useLogin };
