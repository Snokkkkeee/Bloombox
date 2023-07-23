import React, { useState, useEffect } from 'react';
import { Card, Button, Typography, Row, Col,} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from your API and set them in the state
    // For now, we'll just use a static array
    setMessages([
      { id: 1, title: 'Message 1', message: 'This is message 1', type: 'message' },
      { id: 2, title: 'Notification 1', message: 'This is notification 1', type: 'notification' },
      // Add more messages and notifications as needed
    ]);
  }, []);

  return (
    <Row style={{ padding: '10px' }}>
      <Col span={24}>
        <Header
          title="Messages & Notifications"
          subTitle="Here are your latest messages and notifications"
          extra={
            <Button type="primary" icon={<PlusOutlined />}>
              Add Message
            </Button>
          }
        />
        <Row gutter={[16, 16]}>
          {messages.map((message, index) => (
            <Col xs={24} sm={6} key={message.id}>
              <Card title={`${message.type.charAt(0).toUpperCase() + message.type.slice(1)} #${index + 1}`}>
                <Typography.Text>{message.message}</Typography.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Messages;
