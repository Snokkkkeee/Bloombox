import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const { Footer } = Layout;

// Styled-components
const StyledFooter = styled(Footer)`
  background-color: #001529;
  color: #fff;
  border-top: 1px solid #1890ff;
  text-align: center;
`;

const FooterComponent = () => {
  console.log('Inside Footer Component');
  return (
    <StyledFooter>Bloom Box ©2023 Created by Bloom Box Team</StyledFooter>
  );
};

export default FooterComponent;
