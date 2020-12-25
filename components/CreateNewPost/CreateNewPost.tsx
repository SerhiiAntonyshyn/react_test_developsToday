import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_POST, POST_DATA } from '../../store/actions';

import styled from 'styled-components';
import { useRouter } from 'next/router';
import { stateType } from '../../store/reducer';

export const Wrap = styled.div`
  padding: 50px 10px;
  color: #fff;
`;

export const Back = styled.button`
  padding: 10px 30px;
  font-size: 20px;
  border: 0;
  border-radius: 5px;
  background-color: #9f162d;
  color: #fff;
  cursor: pointer;
  outline: none;
  margin-bottom: 30px;

  &:hover {
    background-color: #dc3951;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 25px;
  color: #fff;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  font-size: 20px;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 30px;
`;

export const TextArea = styled.textarea`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  padding: 10px;
  font-size: 20px;
  resize: vertical;
  min-height: 200px;
  border-radius: 5px;
  outline: none;
  margin-bottom: 25px;
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

export const PostSuccess = styled.div`
  padding: 10px 0;
  background-color: green;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const CreateNewPost = () => {
  const $title = useRef<HTMLInputElement>(null);
  const $dist = useRef<HTMLTextAreaElement>(null);
  const [success, setSuccess] = useState(false);
  const [isCreated, setCreated] = useState(false);
  const postLoad = useSelector(({ postLoad }: stateType) => postLoad);
  const dispatch = useDispatch();
  const router = useRouter();


  const titleInputHandle = () => {
    const title = $title.current!;
    title.style.border = 'none';
  };

  const distInputHandle = () => {
    const dist = $dist.current!;
    dist.style.border = 'none';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const title = $title.current!;
    const dist = $dist.current!;
    const titleValue = title.value;
    const distValue = dist.value;

    if (!titleValue || titleValue.length < 5) title.style.border = '2px solid red';
    if (!distValue || distValue.length < 5) dist.style.border = '2px solid red';

    if (titleValue.length > 4 && distValue.length > 4 && !postLoad) {
      dispatch(LOAD_POST(true));
      dispatch(POST_DATA(titleValue, distValue, setSuccess));
      setCreated(true);
      setTimeout(() => router.push('/'), 2000)
    }
  };

  return (
    <>
      <PostSuccess style={{ display: success ? 'block' : 'none' }}>Post created successfully</PostSuccess>
      <form>
        <Label htmlFor="title">Post title</Label>
        <Input onInput={titleInputHandle} ref={$title} id="title" placeholder='Enter post title' />
        <Label htmlFor="body">Post Body</Label>
        <TextArea onInput={distInputHandle} ref={$dist} id="body" placeholder='Enter post body' />
        <Button
          disabled={isCreated}
          onClick={handleSubmit}
          type="submit"
        >
          Create
        </Button>
      </form>
    </>
  )
}