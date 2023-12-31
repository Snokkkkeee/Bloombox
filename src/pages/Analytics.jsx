import React from "react";
import { Layout, Row, Col, Card } from "antd";
import "../styles/Analytics.css";
import AnalyticsWelcome from "../components/Analytics/AnalyticsWelcome.jsx";
import SessionDuration from "../components/analytics/SessionDuration";
import UserActivity from "../components/Analytics/UserActivity.jsx";
import backgroundImage from '../assets/bodybackground2.png';

// Import your components

import LightControl from "../components/LightControl";

import FanControl from "../components/FanControl";
import FertilizerDispenser from "../components/FertilizerDispenser";

const { Content } = Layout;

const Analytics = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: 'transparent' }}>
      <Layout style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'}}>
        <Content>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Card className="Welcome">
                <AnalyticsWelcome />
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
              <Card className="analytics-card" title="User Activity">
                <UserActivity />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card className="analytics-card" title="Session Duration">
               <SessionDuration />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Analytics;
