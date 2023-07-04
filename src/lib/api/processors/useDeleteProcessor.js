import { useMutation } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const deleteProcessor = (id) => {
  return axios.delete(`/processor/delete/${id}`);
};

function useDeleteProcessor() {
  return useMutation({
    mutationFn: (id) => deleteProcessor(id),
    mutationKey: ['deleteProcessor'],
  });
}

export { useDeleteProcessor };
