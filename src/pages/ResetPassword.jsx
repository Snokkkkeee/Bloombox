// ResetPassword.jsx
import React from 'react';
import { Layout, Typography, Card, Form, Input, Button, Breadcrumb, Row, Col } from "antd";
import styled from 'styled-components';
import backgroundImage from '../assets/body-background.png';

const { Title } = Typography;
const { Header, Content } = Layout;

const StyledFormItem = styled(Form.Item)`
  // Your styles here...
`;

export default function ResetPassword() {
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
          <Breadcrumb.Item>Reset Password</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Row justify="center">
            <Col span={16}>
              <Title style={{ color: 'white' }}>Reset Password</Title>
              <p>Enter your new password.</p>
              <Card title="New Password">
                <Form
                  name="reset-password"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <StyledFormItem
                    label="New Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your new password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </StyledFormItem>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Reset Password
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
