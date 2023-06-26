import { useMutation } from '@tanstack/react-query';

const login = (data) => {
  return console.log(data);
};

function useLogin() {
  return useMutation({ mutationFn: login, mutationKey: 'login' });
}

export { useLogin };
