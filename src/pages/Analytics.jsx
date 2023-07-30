import React from "react";
import { Layout, Row, Col, Card } from "antd";
import "../components/Analytics/Analytics.css";
import AnalyticsWelcome from "../components/Analytics/AnalyticsWelcome.jsx";
import TrafficSources from "../components/analytics/TrafficSourcesBarGraph";
import SessionDuration from "../components/analytics/SessionDuration";
import UserActivity from "../components/Analytics/UserActivity.jsx";
import backgroundImage from '../assets/body-background.png';

const { Content } = Layout;

const Analytics = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: 'transparent' }}>
      <Layout style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'}}>
        <Content>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <AnalyticsWelcome />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card className="analytics-card" title="Traffic Sources">
                <TrafficSources />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card className="analytics-card" title="Session Duration">
                <SessionDuration />
              </Card>
            </Col>
            <Row gutter={[16]}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Card className="analytics-card" title="User Activity">
                <UserActivity />
              </Card>
            </Col>
            </Row>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Analytics;
