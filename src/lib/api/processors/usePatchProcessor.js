import { useQuery } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const patchProcessor = (id, data) => {
  return axios.patch(`/processor/get/${id}`, data);
};

function usePatchProcessor() {
  return useQuery({
    queryFn: (id, data) => patchProcessor(id, data),
    queryKey: ['patchProcessor'],
  });
}

export { usePatchProcessor };
