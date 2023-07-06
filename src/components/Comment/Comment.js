import React, { useState } from 'react';
import { Avatar, Divider, Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditCommentModal from 'components/EditCommentModal/EditCommentModal';

const Comment = ({ comment, userInfo, onDeleteComment }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isDeletable = comment?.user?.id === userInfo?.id;

  return (
    <>
      <EditCommentModal
        open={open}
        handleClose={handleClose}
        text={comment?.text}
        commentId={comment.id}
      />
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item alignItems="center" justifyContent="center" display="flex">
          <Avatar />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <Typography style={{ margin: 0, textAlign: 'left' }} variant="h6">
            {comment?.user?.username}
          </Typography>
          <Typography sx={{ textAlign: 'left' }}>{comment?.text}</Typography>
          <Typography sx={{ textAlign: 'left', color: 'gray' }}>
            posted {comment?.createdAt}
          </Typography>
        </Grid>
        {isDeletable && (
          <Grid
            item
            alignItems="center"
            justifyContent="center"
            display="flex"
            sx={{ flexDirection: 'column' }}
          >
            <IconButton onClick={() => onDeleteComment(comment?.id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleClickOpen}>
              <EditIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
      <Divider sx={{ minWidth: '50%', my: 2 }}></Divider>
    </>
  );
};

export { Comment };
