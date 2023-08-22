import React, { useState } from 'react';
import { Switch, Typography, Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const FanIcon = styled(FontAwesomeIcon)`
  color: ${props => props.fanState ? '#0000ff' : 'linear-gradient(to right, #c0c0c0, #808080)'}; // Changed active color to Blue and inactive color to a gradient
  transition: color 0.3s ease-in-out;
`;




const FanControl = (props) => {
  const { fanMessage, handleFanChange } = props;
  const [fanState, setFanState] = useState(fanMessage === 'ON');

  const onFanChange = (checked) => {
    setFanState(checked);
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
          fanState={fanState}
        />
      </Col>
      <Col>
        <Switch
          checkedItems="ON"
          unCheckedItems="OFF"
          defaultChecked={fanState}
          onChange={onFanChange}
        />
      </Col>
    </Row>
  );
};

export default FanControl;
