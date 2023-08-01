import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Space } from "antd";
import { FiZap, FiBatteryCharging } from "react-icons/fi";

const { Title} = Typography;

const SvgComponent = ({ percent, label, Icon,}) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="85 85 170 170"
        style={{
          transform: "rotate(-90deg)",
          overflow: "visible",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <linearGradient
          id="grd_kg7hx8rv8wbw"
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
          gradientTransform="rotate(90, .5, .5)"
        >
          <stop offset="0" stopColor="rgba(5, 205, 153, 0)"></stop>
          <stop offset="100" stopColor="#05CD99"></stop>
        </linearGradient>
        <circle
          cx="170"
          cy="170"
          r="77.5"
          stroke="transparent"
          strokeWidth="15"
          fill="rgba(8, 13, 37, 0.5)" // Updated fill attribute
        ></circle>
        <circle
          cx="170"
          cy="170"
          r="77.5"
          fill="none"
          strokeWidth="15"
          strokeDasharray="486.9"
          strokeDashoffset="146.1"
          strokeLinecap="round"
          stroke="url(#grd_kg7hx8rv8wbw)"
          style={{ transition: "stroke-dashoffset 400ms ease 0s" }}
        ></circle>
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Icon
          style={{
            fontSize: "40px",
            color: "#7EF9E0",
            marginBottom: "10px",
          }}
        />
        <Title
          level={2}
          style={{ color: "white", fontWeight: "bold" }}
        >
          {percent}%
        </Title>
        <div type="secondary">{label}</div>
      </div>
    </div>
  );
};

const EnergyConsumption = () => {
  const [wattage, setWattage] = useState(50);
  const [voltage, setVoltage] = useState(21);

  useEffect(() => {
    // Simulating data update every 5 seconds
    const interval = setInterval(() => {
      setWattage(Math.floor(Math.random() * 100));
      setVoltage(Math.floor(Math.random() * 50));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Space direction="vertical" size="middle" style={{ width: "100%", height: "100%", textAlign: "center", color: "#7EF9E0" }}>
      <Typography.Title level={3} style={{ color: "white", fontWeight: "bold" }}>
        <FiZap style={{ marginRight: "5px", color: "white" }} /> Energy Consumption
      </Typography.Title>
      <Row gutter={16}>
        <Col span={12}>
          <SvgComponent percent={wattage} label="Wattage" Icon={FiZap} color="#FFC0CB" />
        </Col>
        <Col span={12}>
          <SvgComponent percent={voltage} label="Voltage" Icon={FiBatteryCharging} color="#FFA500" />
        </Col>
      </Row>
      <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "60px",
              padding: "auto",
              
            
              width: "100%",
              fontSize: "1.2em",
              lineHeight: "normal",
              fontWeight: "300",
              letterSpacing: "0.131em",
              fontFamily: "Roboto",
            }}
          > The current wattage is {wattage}W and the voltage is {voltage}V.
          </div>
    </Space>
  );
}

export default EnergyConsumption;