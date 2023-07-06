import { useQuery } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const getAllProcessors = () => {
  return axios.get('/processor/getAll');
};

function useGetAllProcessors() {
  return useQuery({
    queryFn: getAllProcessors,
    queryKey: ['getAllProcessors'],
    select: (data) => data?.data,
  });
}

export { useGetAllProcessors };
