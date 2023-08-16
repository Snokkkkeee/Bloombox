import React from 'react';
import { Layout, Form, Switch, List, Typography, Space, Alert, Button, Select } from 'antd';
import { BellOutlined, MailOutlined, MessageOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Content } = Layout;
const { Option } = Select;

function MyNotifications() {
  return (
    <Content style={{ padding: '24px', background: '#f0f2f5' }}>
      <Title level={4}>Notification Preferences</Title>
      <Space direction="vertical" style={{ marginBottom: '24px' }}>
        <Form layout="vertical">
          <Form.Item label="In-App Notifications">
            <Switch
              checkedChildren={<BellOutlined />}
              unCheckedChildren={<BellOutlined />}
            />
          </Form.Item>
          <Form.Item label="Email Notifications">
            <Switch
              checkedChildren={<MailOutlined />}
              unCheckedChildren={<MailOutlined />}
            />
          </Form.Item>
          <Form.Item label="SMS Notifications">
            <Switch
              checkedChildren={<MessageOutlined />}
              unCheckedChildren={<MessageOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Save Preferences</Button>
          </Form.Item>
        </Form>
        <Alert
          message="Note"
          description="Customize how you receive notifications from the platform."
          type="info"
          showIcon
        />
      </Space>

      <Title level={4}>Recent Notifications</Title>
      <List
        itemLayout="horizontal"
        dataSource={[
          { message: 'New login from New York, USA', date: '2022-08-10' },
          { message: 'Password changed successfully', date: '2022-08-05' },
        ]}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.message}
              description={`Date: ${item.date}`}
            />
          </List.Item>
        )}
      />

      <Title level={4}>Email Notification Frequency</Title>
      <Form layout="vertical">
        <Form.Item label="Frequency">
          <Select defaultValue="daily" style={{ width: 200 }}>
            <Option value="daily">Daily</Option>
            <Option value="weekly">Weekly</Option>
            <Option value="monthly">Monthly</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Save Frequency</Button>
        </Form.Item>
      </Form>
    </Content>
  );
}

export default MyNotifications;
