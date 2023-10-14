import React, { useState } from "react";
import { Switch, Row, Col } from "antd";
import TempHumiItem from "../MQTTConnection/ESP32PubSub";

export const LightControl = () => {
  const [, humidity] = TempHumiItem();

  // useEffect(() => {
  //   setHumMessage(humidity);
  // }, [humidity]);

  const [isLightOn, setIsLightOn] = useState(false);

  const handleSwitchChange = (checked) => {
    setIsLightOn(checked);
  };

  return (
    <Row
      justify="space-between"
      size="middle"
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
        color: "#7EF9E0",
      }}
    >
      <Col>
        <Row
          justify="space-between"
          size="middle"
          style={{
            width: "100%",
            height: "100%",
            textAlign: "center",
            color: "#7EF9E0",
          }}
        >
          <p>{isLightOn ? "On" : "Off"}</p>
          <Switch checked={isLightOn} onChange={handleSwitchChange} />
        </Row>
      </Col>
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Your SVG and other components */}
      </Col>
      <Col>
        <p>Toggle</p>
      </Col>
    </Row>
  );
};

export default LightControl;

// Export the state separately
export const lightState = { isLightOn: false }; // Initial state
