import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { FormInputText } from 'components/FormInputText/FormInputText';
import { useUpdateComment } from 'lib/api/comments/useUpdateComment';
import React from 'react';
import { useForm } from 'react-hook-form';

const EditCommentModal = ({ open, handleClose, text, commentId }) => {
  const { mutate: editComment } = useUpdateComment(commentId);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      text,
    },
  });

  const onConfirm = (data) => {
    editComment(data);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit comment</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Edit your comment and save changes
        </DialogContentText>
        <FormInputText
          sx={{ mt: 2 }}
          control={control}
          name="text"
          label="Comment text"
          multiline
          rows={3}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit(onConfirm)}>
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCommentModal;
