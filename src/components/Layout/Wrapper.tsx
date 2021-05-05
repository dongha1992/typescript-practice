import React from 'react';
import styled from 'styled-components';

export const Wrapper: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Center = styled.div``;
