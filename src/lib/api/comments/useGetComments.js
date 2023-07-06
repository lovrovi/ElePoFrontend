import { useQuery } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const getComments = (processorId) => {
  return axios.get(`/comment/get/${processorId}`);
};

function useGetComments(processorId) {
  return useQuery({
    queryFn: () => getComments(processorId),
    queryKey: ['getComments', processorId],
    select: (data) => data?.data,
  });
}

export { useGetComments };
