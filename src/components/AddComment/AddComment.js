import { Button } from '@mui/material';
import { FormInputText } from 'components/FormInputText/FormInputText';
import { useAddComment } from 'lib/api/comments/useAddComment';
import { isUserLoggedIn } from 'lib/helpers/isUserLoggedIn';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddComment = ({ processorId }) => {
  const { mutate: addComment } = useAddComment(processorId);

  const {
    control: commentFormControl,
    handleSubmit,
    reset: resetCommentForm,
  } = useForm({
    defaultValues: {
      text: '',
    },
  });

  const onCommentSubmit = (data) => {
    addComment(data);
    resetCommentForm({ text: '' });
  };
  return (
    <>
      <FormInputText
        control={commentFormControl}
        name="text"
        label={
          isUserLoggedIn() ? 'Comment text' : 'Must be logged in to comment'
        }
        multiline
        rows={3}
        disabled={!isUserLoggedIn()}
        sx={{ width: '30%' }}
      />
      <Button
        disabled={!isUserLoggedIn()}
        onClick={handleSubmit(onCommentSubmit)}
      >
        Submit
      </Button>
    </>
  );
};

export default AddComment;
