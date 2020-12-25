import React from 'react';
import MainLayout from '../components/MainLayout/MainLayout';
import styled from 'styled-components';
import Head from 'next/head';
import axios from 'axios';
import { PostsList } from '../components/PostsList/PostsList';

const Title = styled.h1`
  padding: 20px 0;
  text-align: center;
  color: white;
`;

export default function Home({data}) {
  return (
    <MainLayout>
      <Head>
        <title>Latest Posts page</title>
      </Head>
      <Title>Latest Posts</Title>
      <PostsList
        posts={data}
      />
    </MainLayout>
  );
}

export const getServerSideProps = async() => {
  const { data } = await axios.get('https://simple-blog-api.crew.red/posts');

  return {
    props: { data },
  };
}

