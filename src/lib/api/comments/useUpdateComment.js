import { useMutation } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const updateComment = (data, commentId) => {
  return axios.patch(`/comment/update/${commentId}`, data);
};

function useUpdateComment(commentId) {
  return useMutation({
    mutationFn: (data) => updateComment(data, commentId),
    mutationKey: ['updateComment'],
  });
}

export { useUpdateComment };
