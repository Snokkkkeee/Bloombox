import React, { useState, useEffect } from "react";
import { Layout, Typography, List, notification, Button, Badge, Space } from "antd";
import { BellOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title } = Typography;
const { Content } = Layout;

const NotificationButton = styled(Button)`
  margin-bottom: 20px;
`;

const MyNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Replace this with actual data fetching
    const data = [
      { id: 1, message: "Notification 1", read: false },
      { id: 2, message: "Notification 2", read: false },
      { id: 3, message: "Notification 3", read: true },
      { id: 4, message: "Notification 4", read: false },
    ];
    setNotifications(data);
    setUnreadCount(data.filter((item) => !item.read).length);
  }, []);

  const openNotification = (msg) => {
    notification.open({
      message: "Notification",
      description: msg,
    });
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((item) => ({
      ...item,
      read: true,
    }));
    setNotifications(updatedNotifications);
    setUnreadCount(0);
  };

  return (
    <Content style={{ padding: "0 50px" }}>
      <Title level={2}>My Notifications</Title>
      <Space>
        <Badge count={unreadCount} showZero>
          <BellOutlined style={{ fontSize: '20px' }} />
        </Badge>
        <NotificationButton onClick={markAllAsRead}>Mark all as read</NotificationButton>
      </Space>
      <List
        size="large"
        bordered
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item onClick={() => openNotification(item.message)}>
            {item.read ? item.message : <b>{item.message}</b>}
          </List.Item>
        )}
      />
    </Content>
  );
};

export default MyNotifications;
