import React from "react";
import { Layout, Row, Col, Card } from "antd";
import "/Users/jwsnooke/Desktop/Bloombox Layout/src/components/ActivityComponents/activity.css";
// Import your components
import EnergyMeter from "../components/EnergyMeter";
import HumidityGauge from "../components/HumidityGauge";
import LightControl from "../components/LightControl";
import SoilMoisture from "../components/SoilMoistureBarGraph";
import TemperatureGauge from "../components/TemperatureGauge";
import WaterLevel from "../components/WaterLevelGauge";
import FanControl from "../components/FanControl";
import FertilizerDispenser from "../components/FertilizerDispenser";
import WelcomePage from "../components/Welcome";
import backgroundImage from '../assets/body-background.png';
import TempGauge from "../components/ActivityComponents/TempGauge";
import LightIntensityGauge from "/Users/jwsnooke/Desktop/Bloombox Layout/src/components/ActivityComponents/LightIntensityGauge.jsx";
import PlantHealthMonitor from "/Users/jwsnooke/Desktop/Bloombox Layout/src/components/ActivityComponents/PlantHealthMonitor.jsx";


const { Content } = Layout;

const Activity = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: 'transparent' }}>
      <Layout style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'}}>
        <Content>
       
         
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24}>
              <Card className="dashboard-card" title="Soil Moisture">
                <SoilMoisture />
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12}>
              <Card className="dashboard-card" title="Temperature Gauge">
                <TemperatureGauge />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Card className="dashboard-card" title="Humidity Gauge">
                <HumidityGauge />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Activity;
