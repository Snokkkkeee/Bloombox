import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/plots';
import { Typography, Space, Row, Col } from 'antd';
import { FireOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function TemperatureGauge() {
  const [tempMessage, setTempMessage] = useState(25);

  useEffect(() => {
    const interval = setInterval(() => {
      setTempMessage(prevTemp => (prevTemp >= 50 ? 25 : prevTemp + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const config = {
    percent: tempMessage / 50,
    range: {
      ticks: [0, 1],
      color: tempMessage > 37.5 ? ['#FF4D4F', '#E8EDF3'] : tempMessage > 25 ? ['#FF9800', '#E8EDF3'] : ['#4CAF50', '#E8EDF3'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 50;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }) => ` ${(percent * 50).toFixed(0) + '°C'}`,
        style: {
          color: 'rgba(255,255,255, 0.9)',
          fontSize: 16,
        },
      },
    },
  };

  const status = tempMessage >= 35 ? 'High' : tempMessage >= 20 ? 'Normal' : 'Low';
  const color = status === 'High' ? 'red' : status === 'Normal' ? 'green' : 'blue';

  return (
    <Space direction="vertical" size="middle" style={{ width: '100%', height: '100%',  }}>
      <Title level={4} style={{ color: 'white', fontWeight: 'bold' }}>
        <FireOutlined /> Temperature
      </Title>
      <Gauge {...config} />
      <Row justify="space-between"  style={{ marginTop: '20px',  }}>
        <Col>
          <Text  style={{ color: 'white', fontWeight: 'bold' }}>Status:</Text>
          </Col>
        <Col>
          <Text style={{ color }}>{status}</Text>
        </Col>
      </Row>
    </Space>
  );
}
