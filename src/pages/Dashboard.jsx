import React from "react";
import { Layout, Row, Col, Card } from "antd";
import "./Dashboard.css";
// Import your components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FooterComponent from "../components/FooterComponent";
import EnergyMeter from "../components/EnergyMeter";
import HumidityGauge from "../components/HumidityGauge";
import LightControl from "../components/LightControl";
import SoilMoisture from "../components/SoilMoistureBarGraph";
import TemperatureGauge from "../components/TemperatureGauge";
import WaterLevel from "../components/WaterLevelGauge";
import FanControl from "../components/FanControl";
import FertilizerDispenser from "../components/FertilizerDispenser";
import WelcomePage from "../components/Welcome";


const Dashboard = () => {
  return (
    <Layout className="dashboard-layout">
      <Navbar />
      <Layout className="inner-layout">
        <Sidebar />
        <Layout
          style={{
            minHeight: "100vh",
            background: `url(${
              process.env.PUBLIC_URL +
              "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/body-background.9e7d96f6.png"
            }), linear-gradient(to right, purple, blue)`,
            backgroundSize: "cover",
          }}
        >
          <Layout.Content className="dashboard-content">
            <Row gutter={16}>
              <Col xs={24} sm={24} md={24} lg={24}>
                <Card className="dashboard-card">
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
          </Layout.Content>
        </Layout>
      </Layout>
      <FooterComponent />
    </Layout>
  );
};

export default DashboardPage;
