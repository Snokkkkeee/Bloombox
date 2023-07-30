import React from "react";
import { Layout, Row, Col, Card } from "antd";
import ReportWelcome from "../components/reports/ReportWelcome";
import ProductionSources from "../components/reports/ProductionSourcesBarGraph";
import EnergyConsumption from "../components/reports/EnergyConsumption";
import MaintenanceActivity from "../components/reports/MaintenanceActivity.jsx";
import backgroundImage from '../assets/body-background.png';
import '/Users/jwsnooke/Desktop/Bloombox Layout/src/components/reports/Reports.css';

const { Content } = Layout;

const Reports = () => {
  return (
    <Layout className="outer-layout" style={{backgroundImage: `url(${backgroundImage})`}}>
      <Layout className="inner-layout">
        <Content className="dashboard-content">
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <ReportWelcome />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card className="dashboard-card" title="Production Sources">
                <ProductionSources />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card className="dashboard-card" title="Energy Consumption">
                <EnergyConsumption />
              </Card>
            </Col>
          </Row>
          <Row gutter={[16]}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <Card className="dashboard-card" title="Maintenance Activity">
                <MaintenanceActivity />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Reports;
