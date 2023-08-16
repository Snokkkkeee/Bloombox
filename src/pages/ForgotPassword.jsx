// ForgotPassword.jsx
import React from 'react';
import { Layout, Typography, Card, Form, Input, Button, Breadcrumb, Row, Col } from "antd";
import styled from 'styled-components';
import backgroundImage from '../assets/body-background.png';

const { Title } = Typography;
const { Header, Content } = Layout;

const StyledFormItem = styled(Form.Item)`
  // Your styles here...
`;

export default function ForgotPassword() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'}}>
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Forgot Password</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Row justify="center">
            <Col span={16}>
              <Title style={{ color: 'white' }}>Forgot Password</Title>
              <p>Enter your email to reset your password.</p>
              <Card title="Reset Password">
                <Form
                  name="forgot-password"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <StyledFormItem
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                        type: 'email'
                      },
                    ]}
                  >
                    <Input />
                  </StyledFormItem>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Send Reset Link
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
} 
