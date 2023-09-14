import React, { useState } from "react";
import { Switch, Typography, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const FertilizerIcon = styled(FontAwesomeIcon)`
  position: relative;
  color: ${(props) => props.fertilizerStatus ? '#20B2AA' : '#ADD8E6'};
  transition: color 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.fertilizerStatus ? 'linear-gradient(to right, #20B2AA, #ADD8E6)' : 'none'};
    z-index: -1;
    mask: url(${(props) => props.icon[1]}) no-repeat center / contain;
  }
`;

const FertilizerDispenser = (props) => {
  const [isOn, setIsOn] = useState(false);

  const handleSwitchChange = (checked) => {
    setIsOn(checked);
  };

  return (
    <Row
      justify="space-between"
      align="middle"
      style={{ height: "100%", textAlign: "center", color: "#7EF9E0" }}
    >
      <Col>
        <Typography.Title
          level={4}
          style={{ color: "white", fontWeight: "bold", margin: "0 0 5px" }}
        >
          Fertilizer Dispenser
        </Typography.Title>
      </Col>
      <Col>
        <FertilizerIcon
          icon={faFlask}
          size="3x"
          fertilizerStatus={isOn}
        />
      </Col>
      <Col>
        <p>{isOn ? 'On' : 'Off'}</p>
        <Switch checked={isOn} onChange={handleSwitchChange} />
      </Col>
    </Row>
  );
};

export default FertilizerDispenser;
