import React, { useState } from "react";
import { Switch, Typography, Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const FertilizerIcon = styled(FontAwesomeIcon)`
  color: ${(props) =>
    props.fertilizerStatus
      ? "#0000ff"
      : "linear-gradient(to right, #c0c0c0, #808080)"};
  transition: color 0.3s ease-in-out;
`;
const FertilizerDispenser = () => {
  const [fertilizerStatus, setfertilizerstatus] = useState("OFF");
  const handleFertilizerChange = (checked) => {
    setfertilizerstatus(checked ? "ON" : "OFF");
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
          fertilizerStatus={fertilizerStatus === "ON"}
        />
      </Col>
      <Col>
        <Switch
          checkedItems="ON"
          unCheckedItems="OFF"
          defaultChecked={fertilizerStatus === "ON"}
          onChange={handleFertilizerChange}
        />
      </Col>
    </Row>
  );
};
export default FertilizerDispenser;
