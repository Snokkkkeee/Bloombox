import React from "react";
import { Layout, Row, Col, Card, } from "antd";
import "./Dashboard.css";
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

const { Content } = Layout;

const DashboardPage = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: 'transparent' }}>
      <Layout style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'}}>
        <Content>
    
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24}>
              
             
            
              <Card className="Welcome">
                <WelcomePage />
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Card className="dashboard-card" title="Light Control">
                <LightControl />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Card className="dashboard-card" title="Fan Control">
                <FanControl />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8}>
              <Card className="dashboard-card" title="Fertilizer Dispenser">
                <FertilizerDispenser />
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card className="dashboard-card" title="Energy Meter">
                <EnergyMeter />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card className="dashboard-card" title="Water Level">
                <WaterLevel />
              </Card>
            </Col>
          </Row>
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

export default DashboardPage;
