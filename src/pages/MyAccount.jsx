import React from "react";
import { Layout, Typography, Form, Input, Button } from "antd";

const { Title } = Typography;
const { Content } = Layout;

function MyAccount() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Content style={{ padding: "0 50px" }}>
      <Title level={2}>My Account</Title>
      <Form name="account_form" onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Information
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
}

export default MyAccount;
