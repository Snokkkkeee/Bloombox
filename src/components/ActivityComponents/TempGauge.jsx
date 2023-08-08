import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Typography, Row, Col, Space } from 'antd';
import { FaFire } from "react-icons/fa"; // Import the flames icon from 'react-icons/fa'

const { Title, Text } = Typography;

const TempGauge = () => {
  const [percent, setPercent] = useState(18);
  const MAX_TEMPERATURE = 40; // Adjust the maximum temperature value as needed

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prevPercent => (prevPercent >= MAX_TEMPERATURE ? 40 : prevPercent + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const data = [
    { value: percent },
    { value: MAX_TEMPERATURE - percent },
  ];

  const COLORS = ['#ff4d4d', '#f0f0f0']; // Red color for temperature gauge

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
        color: "#ff4d4d",
      }}
    >
      <Title level={3} style={{ color: "#ff4d4d", fontWeight: "bold" }}>
        <FaFire style={{ marginRight: "10px", color: "#ff4d4d" }} /> {/* Use the flames icon */}
        Temperature Gauge
      </Title>
      <Row gutter={16}>
        <Col span={24}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '200px',
              padding: '20px',
              borderRadius: '20px',
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius="60%"
                  outerRadius="90%"
                  fill="#8884d8"
                  paddingAngle={5}
                  startAngle={180}
                  endAngle={0}
                  dataKey="value"
                >
                  {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={index === 0 ? '#ff4d4d' : '#f0f0f0'} />)
                  }
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div style={{ position: 'absolute', fontSize: '2em', color: '#ff4d4d' }}>{`${percent}°C`}</div>
          </div>
          <Text style={{ marginTop: '20px', color: '#ff4d4d' }}>The current temperature is {percent}°C of the maximum temperature.</Text>
        </Col>
      </Row>
    </Space>
  );
};

export default TempGauge;