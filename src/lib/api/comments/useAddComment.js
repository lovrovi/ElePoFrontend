import { useMutation } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const addComment = (data, processorId) => {
  return axios.post(`/comment/add/${processorId}`, data);
};

function useAddComment(processorId) {
  return useMutation({
    mutationFn: (data) => addComment(data, processorId),
    mutationKey: ['addComment'],
  });
}

export { useAddComment };
