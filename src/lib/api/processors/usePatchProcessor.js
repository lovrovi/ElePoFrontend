import { useMutation } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const patchProcessor = (id, data) => {
  return axios.patch(`/processor/update/${id}`, data);
};

function usePatchProcessor(id, options) {
  return useMutation({
    mutationFn: (data) => patchProcessor(id, data),
    mutationKey: ['patchProcessor', id],
    ...options,
  });
}

export { usePatchProcessor };
