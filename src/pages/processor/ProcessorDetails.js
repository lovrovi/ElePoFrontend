import React, { useEffect } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router';
import { Box, Button, CircularProgress, Divider, Stack } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useGetProcessor } from 'lib/api/processors/useGetProcessor';
import { useGetComments } from 'lib/api/comments/useGetComments';
import { createSocket } from 'lib/api/socket';
import { Comment } from 'components/Comment/Comment';
import { useGetUserInfo } from 'lib/api/login/useGetUserInfo';
import { useDeleteComment } from 'lib/api/comments/useDeleteComment';
import AddComment from 'components/AddComment/AddComment';
import ProcessorDetailsDisplay from 'components/ProcessorDetailsDisplay/ProcessorDetailsDisplay';
import { routes } from 'lib/router/Router';

const ProcessorDetails = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: processor, isLoading, isFetched } = useGetProcessor(id);
  const { data: comments, isLoading: isCommentLoading } = useGetComments(id);
  const { data: userInfo } = useGetUserInfo();

  const { mutate: deleteComment } = useDeleteComment();

  const onCommentCreate = () =>
    queryClient.refetchQueries({ queryKey: ['getComments', id] });

  const onDeleteComment = (commentId) => deleteComment(commentId);

  const onCompareClick = () => {
    navigate({
      pathname: generatePath(routes.PROCESSORS_COMPARE),
      search: `?leftId=${id}`,
    });
  };

  const onEditClick = () => {
    navigate(generatePath(routes.PROCESSORS_EDIT, { id }));
  };

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
      <Button onClick={onCompareClick}>Compare with other processors</Button>
      {userInfo?.role === 'ROLE_ADMIN' && (
        <Button onClick={onEditClick}>Edit processor</Button>
      )}
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
