import { useMutation } from '@tanstack/react-query';

const register = (data) => {
  return console.log(data);
};

function useRegister() {
  return useMutation({ mutationFn: register, mutationKey: 'register' });
}

export { useRegister };
