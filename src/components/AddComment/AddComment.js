import { Button } from '@mui/material';
import { FormInputText } from 'components/FormInputText/FormInputText';
import { useAddComment } from 'lib/api/comments/useAddComment';
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
        label="Comment text"
        multiline
        rows={3}
      />
      <Button onClick={handleSubmit(onCommentSubmit)}>Submit</Button>
    </>
  );
};

export default AddComment;
