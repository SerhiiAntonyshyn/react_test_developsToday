import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_POST_DATA } from '../../store/actions';
import { stateType } from '../../store/reducer';
import { useRouter } from 'next/router';

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  @media (max-width: 960px) {
    & {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    & {
      display: block;
    }
  }
`;

export const PostItem = styled.div`
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 20px;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const PostTitle = styled.p`
  width: fit-content;
  transition: 0.3s all;
  position: relative;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid transparent;
  padding: 10px 0;
`;


export const PostError = styled.p`
  width: fit-content;
  transition: 0.3s all;
  position: relative;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid transparent;
  padding: 10px 0;
  color: red;
`;

export const PostLink = styled.a`
  cursor: pointer;
  margin: 5px;
  font-size: 20px;
  color:  #FF8C00;
  border-bottom: 1px solid transparent;
  transition: 0.2s all;
  &:hover {
    border-bottom: 1px solid #e07a5f;
  }
`;


const PostBody = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  margin: 5px;
  font-size: 20px;
  border: 0;
  cursor: pointer;
  background: #0075ff;
  box-shadow: 0 6px 23px rgba(0, 117, 255, 0.46);
  border-radius: 8px;
  color: white;

  &:hover {
    background-color: rgb(255, 255, 255);
    color: #0075ff;
  }
`;

export const PostHeader = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostsList = ({ posts }) => {
  const dispatch = useDispatch();
  const deletedPostId = useSelector(({ post }: stateType) => post);
  const router = useRouter();
  const currentPostsList = posts.filter((post: any) => post.id !== deletedPostId);
  const handleDelete = (id: number) => {
    dispatch(DELETE_POST_DATA(id))
    router.push('/');
  };

  return (
    <div className="App__PostList">
      {posts.length !== 0 ? (
        <List>
          {currentPostsList.map(post => (
            <PostItem
              key={post.id}
            >
              <PostHeader>
                <PostTitle>
                  {post.title}
                </PostTitle>
                <Link
                  href='/posts/[postId]'
                  as={`/posts/${post.id}`}
                  key={post.id + post.title}
                >
                  <PostLink>Open</PostLink>
                </Link>
              </PostHeader>
              <PostBody>
                {post.body}
              </PostBody>
              <Button
                type="button"
                onClick={() => handleDelete(post.id)}
              >
                Delete post
                </Button>
            </PostItem>
          ))}
        </List>
      ) : (
          <PostError>No posts found, please create new one</PostError>
        )}
    </div>
  )
}
