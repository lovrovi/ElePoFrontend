import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Box, CircularProgress, Divider, Stack } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useGetProcessor } from 'lib/api/processors/useGetProcessor';
import { useGetComments } from 'lib/api/comments/useGetComments';
import { createSocket } from 'lib/api/socket';
import { Comment } from 'components/Comment/Comment';
import { useGetUserInfo } from 'lib/api/login/useGetUserInfo';
import { useDeleteComment } from 'lib/api/comments/useDeleteComment';
import AddComment from 'components/AddComment/AddComment';
import ProcessorDetailsDisplay from 'components/ProcessorDetailsDisplay/ProcessorDetailsDisplay';

const ProcessorDetails = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data: processor, isLoading, isFetched } = useGetProcessor(id);
  const { data: comments, isLoading: isCommentLoading } = useGetComments(id);
  const { data: userInfo } = useGetUserInfo();

  const { mutate: deleteComment } = useDeleteComment();

  const onCommentCreate = () =>
    queryClient.refetchQueries({ queryKey: ['getComments', id] });

  const onDeleteComment = (commentId) => deleteComment(commentId);

  useEffect(() => {
    const socket = createSocket(id);
    socket.connect();
    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
    socket.on('CREATE', onCommentCreate);
    socket.on('UPDATE', onCommentCreate);
    socket.on('DELETE', onCommentCreate);

    return () => {
      socket.off('CREATE');
      socket.off('UPDATE');
      socket.off('DELETE');
    };
  }, []);

  if (isLoading || isCommentLoading)
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Stack spacing={3} alignItems="center">
      <ProcessorDetailsDisplay processor={processor} isFetched={isFetched} />
      <Divider sx={{ minWidth: '50%' }}>Add your comments</Divider>
      <AddComment processorId={id} />
      <Divider sx={{ minWidth: '50%' }}>Other comments</Divider>
      <Box sx={{ maxWidth: '80%' }}>
        {comments?.map((comm, index) => {
          return (
            <Comment
              comment={comm}
              userInfo={userInfo}
              onDeleteComment={onDeleteComment}
              key={index}
            />
          );
        })}
      </Box>
    </Stack>
  );
};

export default ProcessorDetails;
