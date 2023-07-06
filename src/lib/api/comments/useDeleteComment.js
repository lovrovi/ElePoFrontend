import { useMutation } from '@tanstack/react-query';
import axios from 'lib/api/axiosConfig';

const deleteComment = (commentId) => {
  return axios.delete(`/comment/delete/${commentId}`);
};

function useDeleteComment() {
  return useMutation({
    mutationFn: (commentId) => deleteComment(commentId),
    mutationKey: ['deleteComment'],
  });
}

export { useDeleteComment };
