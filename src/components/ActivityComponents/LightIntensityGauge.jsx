// LightIntensityGauge.jsx

import React from 'react';
import GaugeChart from 'react-gauge-chart';
import styled from 'styled-components';

const GaugeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  margin-left: -50px; // Move the gauge to the left
`;

const LightIntensityGauge = () => {
  const lightIntensity = 0.75; // 75%

  return (
    <GaugeContainer>
      <GaugeChart id="gauge-chart1" 
        nrOfLevels={20} 
        percent={lightIntensity} 
        textColor="#ddd6f3" // Change the color of the percentage meter to white
        needleColor="#345243"
        colors={['#bdc3c7', '#FFC371', '#00C49F']}
      />
      
    </GaugeContainer>
  );
};

export default LightIntensityGauge;
