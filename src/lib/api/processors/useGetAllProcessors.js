import { useQuery } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const getAllProcessors = () => {
  return axios.get('/processor/getAll');
};

function useGetAllProcessors() {
  return useQuery({
    queryFn: getAllProcessors,
    queryKey: ['getAllProcessors'],
    select: () => [
      {
        id: 1,
        name: 'string',
        manufacturerName: 'AMD',
        socket: 'string',
        releaseDate: '2023-07-02T17:56:22.337Z',
        numberOfCores: 10,
        numberOfThreads: 10,
        baseClockSpeed: 10,
        boostClockSpeed: 10,
        retailPrice: 10,
        additionalInfo: 'string',
      },
    ],
  });
}

export { useGetAllProcessors };
