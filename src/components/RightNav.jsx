import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  // margin-left:10%;
  // justify-content:center;
  flex-flow: row nowrap;

  li {
    color:white;
    // background-color:white;
    padding: 18px 20px;

  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: white;
    }
  }
`;
const Part1 = styled.span`
`
const Part2 = styled.span``
const Part3 = styled.span``
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Part1><li>Home</li></Part1>
      <Part2><li>About Us</li></Part2>
      <Part3><li>Product</li></Part3>
      <Part3><li>Contact Us</li></Part3>
      {/* <li>Sign In</li>
      <li>Sign Up</li> */}
    </Ul>
  )
}

export default RightNav
