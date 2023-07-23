import React, { useState, useEffect } from "react";
import { Layout, Typography, List, notification } from "antd";

const { Title } = Typography;
const { Content } = Layout;

const MyNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Replace this with actual data fetching
    const data = [
      "Notification 1",
      "Notification 2",
      "Notification 3",
      "Notification 4",
    ];
    setNotifications(data);
  }, []);

  const openNotification = (msg) => {
    notification.open({
      message: "Notification",
      description: msg,
    });
  };

  return (
    <Content style={{ padding: "0 50px" }}>
      <Title level={2}>My Notifications</Title>
      <List
        size="large"
        bordered
        dataSource={notifications}
        renderItem={(item) => (
          <List.Item onClick={() => openNotification(item)}>{item}</List.Item>
        )}
      />
    </Content>
  );
};

export default MyNotifications;
