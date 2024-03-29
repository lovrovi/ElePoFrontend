import { useQuery } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const getProcessor = (id) => {
  return axios.get(`/processor/get/${id}`);
};

function useGetProcessor(id) {
  return useQuery({
    queryFn: () => getProcessor(id),
    queryKey: ['getProcessor', id],
    select: (data) => data?.data,
    enabled: !!id,
  });
}

export { useGetProcessor };
