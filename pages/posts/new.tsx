import MainLayout from '../../components/MainLayout/MainLayout';
import Head from "next/head";
import React from 'react';
import { CreateNewPost } from '../../components/CreateNewPost/CreateNewPost';
import styled from 'styled-components';

const Title = styled.h1`
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  color: #0075ff;
`;

export default function CreatePost() {
  return (
    <MainLayout>
      <Head>
        <title>Create Post page</title>
      </Head>
      <Title>Create Post page</Title>
      <CreateNewPost />
    </MainLayout>
  )
}