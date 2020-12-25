import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export const Nav = styled.div`
  background-color: #FF8C00;
  font-size: 20px;
  padding: 30px 0px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: white;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Menu = styled.div``;

export const NavItem = styled.a`
  padding: 0 20px;
  margin-left: 10px;
  border-bottom: 1px solid transparent;
  transition: 0.2s all;
  &:hover {
    cursor: pointer;
    color: #0000FF;
    border-bottom: 1px solid #eddcd2;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <Menu>
        <Link href='/'>
          <NavItem>Latest Posts page</NavItem>
        </Link>
        <Link href='/posts/new'>
          <NavItem>Create new post</NavItem>
        </Link>
      </Menu>
    </Nav>
  );
};

export default Navigation;
