import React, { useState, useEffect } from "react";
import { Gauge } from "@ant-design/plots";
import { Typography, Space, Row, Col } from "antd";
import { CloudOutlined } from "@ant-design/icons";
import TempHumiItem from "../MQTTConnection/ESP32PubSub";

const { Title, Text } = Typography;

export default function HumidityGauge() {
  const [humMessage, setHumMessage] = useState(0);
  const [, humidity] = TempHumiItem();

  useEffect(() => {
    setHumMessage(humidity);
  }, [humidity]);

  const config = {
    percent: humMessage / 100,
    range: {
      ticks: [0, 1],
      color: ["#30BF78", "#E8EDF3"],
    },
    indicator: {
      pointer: {
        style: {
          stroke: "#D0D0D0",
        },
      },
      pin: {
        style: {
          stroke: "#D0D0D0",
        },
      },
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }) => ` ${(percent * 100).toFixed(0)}%`,
        style: {
          color: "rgba(255,255,255, 0.9)",
          fontSize: 16,
        },
      },
    },
  };

  const status =
    humMessage >= 70 ? "High" : humMessage >= 40 ? "Normal" : "Low";
  const color =
    status === "High" ? "red" : status === "Normal" ? "green" : "blue";

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ width: "100%", height: "100%" }}
    >
      <Title
        level={3}
        style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
      >
        <CloudOutlined /> Humidity
      </Title>
      <Gauge {...config} />
      <Row justify="space-between" style={{ marginTop: "20px" }}>
        <Col>
          <Text style={{ color: "white", fontWeight: "bold" }}>Status:</Text>
        </Col>
        <Col>
          <Text style={{ color }}>{status}</Text>
        </Col>
      </Row>
    </Space>
  );
}
