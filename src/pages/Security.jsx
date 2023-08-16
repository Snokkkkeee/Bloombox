import React from 'react';
import { Layout, Form, Button, Switch, List, Typography, Space, Alert, Input } from 'antd';
import { GoogleOutlined, MobileOutlined, QuestionCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Content } = Layout;

function Security() {
  return (
    <Content style={{ padding: '24px', background: '#f0f2f5' }}>
      <Title level={4}>Two-Factor Authentication (2FA)</Title>
      <Space direction="vertical" style={{ marginBottom: '24px' }}>
        <Form layout="vertical">
          <Form.Item label="Google Authenticator">
            <Switch
              checkedChildren={<GoogleOutlined />}
              unCheckedChildren={<GoogleOutlined />}
            />
          </Form.Item>
          <Form.Item label="SMS Authentication">
            <Switch
              checkedChildren={<MobileOutlined />}
              unCheckedChildren={<MobileOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Save 2FA Settings</Button>
          </Form.Item>
        </Form>
        <Alert
          message="Note"
          description="Enabling two-factor authentication adds an extra layer of security to your account."
          type="info"
          showIcon
        />
      </Space>

      <Title level={4}>Connected Devices</Title>
      <List
        itemLayout="horizontal"
        dataSource={[
          { device: 'MacBook Pro', location: 'New York, USA' },
          { device: 'iPhone 12', location: 'San Francisco, USA' },
        ]}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.device}
              description={`Location: ${item.location}`}
            />
            <Button type="link">Disconnect</Button>
          </List.Item>
        )}
      />

      <Title level={4}>Security Questions</Title>
      <Form layout="vertical">
        <Form.Item label="What was your childhood nickname?">
          <Input placeholder="Answer" prefix={<QuestionCircleOutlined />} />
        </Form.Item>
        <Form.Item label="What is the name of your favorite childhood friend?">
          <Input placeholder="Answer" prefix={<QuestionCircleOutlined />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Save Answers</Button>
        </Form.Item>
      </Form>

      <Title level={4}>Recent Login Activity</Title>
      <List
        itemLayout="horizontal"
        dataSource={[
          { date: '2022-08-10', location: 'New York, USA' },
          { date: '2022-08-05', location: 'San Francisco, USA' },
        ]}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={`Date: ${item.date}`}
              description={`Location: ${item.location}`}
              icon={<ClockCircleOutlined />}
            />
          </List.Item>
        )}
      />
    </Content>
  );
}

export default Security;
