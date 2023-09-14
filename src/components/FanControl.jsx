import React, { useState } from 'react';
import { Switch, Typography, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const FanIcon = styled(FontAwesomeIcon)`
  position: relative;
  color: ${props => props.fanstate ? '#20B2AA' : '#ADD8E6'}; // Fallback color (Seafoam Green and Light Blue)
  transition: color 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.fanstate ? 'linear-gradient(to right, #20B2AA, #ADD8E6)' : 'none'};
    z-index: -1;
    mask: url(${props => props.icon[1]}) no-repeat center / contain;
  }
`;





const FanControl = (props) => {
  const { fanMessage, handleFanChange } = props;
  const [fanstate, setfanstate] = useState(fanMessage === 'ON');

  const onFanChange = (checked) => {
    setfanstate(checked);
    if (typeof handleFanChange === 'function') {
      handleFanChange(checked);
    }
  };

  return (
    <Row justify="space-between" align="middle" style={{ height: '100%', textAlign: 'center', color: '#7EF9E0' }}>
      <Col>
        <Typography.Title
          level={4}
          style={{ color: 'white', fontWeight: 'bold', margin: '0 0 5px' }}
        >
          Fan Control
        </Typography.Title>
      </Col>
      <Col>
        <FanIcon
          icon={faWind}
          size="3x"
          fanstate={fanstate} // Pass as boolean
        />
      </Col>
      <Col>
        <Switch
          checkedChildren="ON"
          unCheckedChildren="OFF"
          defaultChecked={fanstate}
          onChange={onFanChange}
        />
      </Col>
    </Row>
  );
};

export default FanControl;
