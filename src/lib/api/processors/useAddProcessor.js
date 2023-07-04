import { useMutation } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const addProcessor = (data) => {
  return axios.post('/processor/add', data);
};

function useAddProcessor() {
  return useMutation({
    mutationFn: addProcessor,
    mutationKey: ['addProcessor'],
  });
}

export { useAddProcessor };
