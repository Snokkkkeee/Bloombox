import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Switch, Button, Typography } from "antd";
import styled from "styled-components";
// Other imports...
const { Title } = Typography;

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, cherry, purple);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormWrapper = styled.div`
  background: black;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
`;

const StyledButton = styled(Button)`
  background: red;
  border: none;
  
  &:hover {
    box-shadow: 0px 0px 10px red;
  }
`;

export default function SignIn() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  

  return (
    <PageWrapper>
      <FormWrapper>
        <Title level={2} style={{ color: 'white' }}>Sign In</Title>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item name="email" rules={[{ required: true, message: "Please input your email!" }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <StyledButton type="primary" htmlType="submit" block>
              Sign In
            </StyledButton>
          </Form.Item>
        </Form>
      </FormWrapper>
    </PageWrapper>
  );
}