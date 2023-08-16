import React from 'react';
import { Layout, Form, Input, Button, Avatar, Divider, Switch, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined, BellOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Content } = Layout;

function MyAccount() {
  return (
    <Content style={{ padding: '24px', background: '#f0f2f5' }}>
      <Row gutter={24}>
        <Col span={8}>
          <Title level={4}>Profile Information</Title>
          <Form layout="vertical">
            <Form.Item label="Username">
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item label="Email">
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item label="Avatar">
              <Avatar icon={<UserOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Update Profile</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}>
          <Title level={4}>Change Password</Title>
          <Form layout="vertical">
            <Form.Item label="Current Password">
              <Input.Password prefix={<LockOutlined />} placeholder="Current Password" />
            </Form.Item>
            <Form.Item label="New Password">
              <Input.Password prefix={<LockOutlined />} placeholder="New Password" />
            </Form.Item>
            <Form.Item label="Confirm New Password">
              <Input.Password prefix={<LockOutlined />} placeholder="Confirm New Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Change Password</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}>
          <Title level={4}>Notifications</Title>
          <Form layout="vertical">
            <Form.Item label="Email Notifications">
              <Switch checkedChildren={<BellOutlined />} unCheckedChildren={<BellOutlined />} />
            </Form.Item>
            <Form.Item label="SMS Notifications">
              <Switch checkedChildren={<BellOutlined />} unCheckedChildren={<BellOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Save Settings</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Divider />
      {/* Add more sections here as needed */}
    </Content>
  );
}

export default MyAccount;
