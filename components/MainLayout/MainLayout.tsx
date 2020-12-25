import React from 'react';
import Navigation from '../Navigation/Navigation';
import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
`;

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Content>{children}</Content>
    </div>
  );
};

export default MainLayout;
