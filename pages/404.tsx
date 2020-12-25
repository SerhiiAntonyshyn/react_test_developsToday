import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import MainLayout from '../components/MainLayout/MainLayout';

const Error = styled.div`
  display: flex;
  height: 30vh;
  justify-content: center;
  align-items: center;
`;

const MainLink = styled.div`
  font-size: 30px;
  text-align: center;
  a {
    border-bottom: 1px solid transparent;
    transition: 0.3s all;
  }
  a:hover {
    border-bottom: 2px solid #FF8C00;
  }
`;

const ErrorText = styled.h1`
  letter-spacing: 3px;
  padding: 20px 0;
  font-size: 40px;
  color: white;
`;

const LinkText = styled.a`
  letter-spacing: 3px;
  padding: 20px 0;
  font-size: 35px;
  color: #FF8C00;
`;

const Border = styled.span`
  border: 1px solid #FF8C00;
  height: 70px;
  margin: 0 20px;
`;

const ErrorPage = () => {
  return (
    <MainLayout>
      <Error>
        <ErrorText>404</ErrorText>
        <Border></Border>
        <ErrorText>Not Found</ErrorText>
      </Error>
      <MainLink>
        <Link href='/'>
          <LinkText>Go to Latest Post page</LinkText>
        </Link>
      </MainLink>
    </MainLayout>
  );
};

export default ErrorPage;