import React from 'react';
import { Card, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const PlantHealthMonitor = () => {

  const plantHealth = 75; // Percentage

  return (
    <Card>
      <Title>Plant Health Monitor <InfoCircleOutlined /></Title>
      


      <Typography.Text type={plantHealth > 50 ? "success" : "danger"}>
        {plantHealth > 50 ? "Good Health" : "Requires Attention"}
      </Typography.Text>

      <Typography.Paragraph>
        Current plant health is at {plantHealth}%. Water and nourish regularly
        to improve plant health.
      </Typography.Paragraph>

    </Card>
  );
}

export default PlantHealthMonitor;