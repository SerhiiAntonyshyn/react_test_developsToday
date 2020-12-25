import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { POST_DATA_COMMENT } from '../../store/actions';
import { useState } from 'react';

const CommentContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
`;

const CommentTitle = styled.h1`
  margin-bottom: 20px;
  color: #0075ff;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  font-size: 18px;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  resize: vertical;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin: 5px;
  font-size: 20px;
  border: 0;
  cursor: pointer;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  background: #0075ff;
  box-shadow: 0 6px 23px rgba(0, 117, 255, 0.46);
  border-radius: 8px;
  color: white;

  &:hover {
    background-color: rgb(255, 255, 255);
    color: #0075ff;
  }

  &:disabled{
    background-color: lightgrey;
    color: rgb(100, 97, 97);
    pointer-events: none;
    box-shadow: none;
  }
`;

export const CommentCreate = () => {
  const $textArea = React.useRef<HTMLInputElement>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isCommentCreated, setCreated] = useState(false);

  const handleInput = () => {
    const textArea = $textArea.current!;
    textArea.style.border = 'none';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const textArea = $textArea.current!;
    const { value } = textArea;

    if (!value || value.length < 5) textArea.style.border = '2px solid red';
    if (value && value.length > 4) {
      const postID = router.query.postId;
      dispatch(POST_DATA_COMMENT(value, postID));
      setCreated(true)
    }
  };

  return (
    <>
      <CommentContent>
        <CommentTitle>Write comment</CommentTitle>
        <TextArea ref={$textArea} onInput={handleInput} />
      </CommentContent>
      <Button
        disabled={isCommentCreated}
        onClick={handleSubmit}
        type="submit"
      >
        Send
      </Button>
    </>
  );
};
