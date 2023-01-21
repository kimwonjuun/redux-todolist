import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <StyledHeaderArea>TODOLIST</StyledHeaderArea>;
};

export default Header;

const StyledHeaderArea = styled.div`
  background-color: #9469fa;
  padding: 20px;
  font-size: x-large;
  font-weight: 700;
  text-align: center;
`;
