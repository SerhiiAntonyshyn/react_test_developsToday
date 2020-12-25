import React from 'react';
import { Post } from '../../pages/helpers/interfaces';
import { CommentCreate } from '../CommentCreate/CommentCreate';
import styled from 'styled-components';

const PostContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
`;

const PostTitle = styled.h1`
  margin-bottom: 20px;
  color: #0075ff;
`;

const PostBody = styled.p`
  text-align: justify;
  font-size: 18px;
  padding: 20px;
  line-height: 28px;
  color: white;
`;

const Comments = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #0075ff;
  font-size: 2em;
`;

const Comment = styled.div`
  padding: 20px 10px;
  background: white;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 15px;
`;

const CommentText = styled.p`
  padding-left: 10px;
`;

export const PostDetails = ({ title, body, comments }: Post) => {
  return (
    <>
      <PostContent>
        <PostTitle>{title}</PostTitle>
        <PostBody>{body}</PostBody>
      </PostContent>
      <Comments> Comments ({comments.length}) : </Comments>
      {comments.map((item, index) => {
        return <Comment key={item.body + index}>
          <CommentText>{item.body}</CommentText>
        </Comment>
      })}
      <CommentCreate />
    </>
  )
}
