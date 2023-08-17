import React from "react";
import { Layout, Row, Col, Card, Menu, Typography } from "antd";
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
import backgroundImage from "../assets/body-background.png";
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaWifi,
  FaServer,
  FaDatabase,
  FaDesktop,
  FaNetworkWired,
  FaUserCircle,
  FaBell,
  FaUserCog,
  FaShieldAlt,
} from "react-icons/fa";
const { Content } = Layout;
const { Title } = Typography;

const DashboardPage = () => {
  return (
    <Layout style={{ minHeight: "100vh", background: "transparent" }}>
      <Layout
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Sider>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Title
              level={3}
              style={{
                color: "lightblue",
                margin: "10px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            ></Title>{" "}
            <Menu.Divider />
            <Menu.Item key="1" icon={<FaHome />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.SubMenu key="sub1" icon={<FaDesktop />} title="Overview">
              <Menu.Item key="3" icon={<FaChartBar />}>
                <Link to="/overview/analytics">Analytics</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Divider />
            <Menu.Divider />
            <Menu.SubMenu key="sub4" icon={<FaWifi />} title="Monitor">
              <Menu.Item key="14" icon={<FaServer />}>
                <Link to="/monitor/servers">Servers</Link>
              </Menu.Item>
              <Menu.Item key="15" icon={<FaDatabase />}>
                <Link to="/monitor/databases">Databases</Link>
              </Menu.Item>
              <Menu.Item key="16" icon={<FaDesktop />}>
                <Link to="/monitor/systems">Systems</Link>
              </Menu.Item>
              <Menu.Item key="17" icon={<FaNetworkWired />}>
                <Link to="/monitor/networks">Networks</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Divider />
            <Menu.SubMenu key="sub5" icon={<FaUserCog />} title="Settings">
              <Menu.Item key="18" icon={<FaUserCircle />}>
                <Link to="/settings/myaccount">My Account</Link>
              </Menu.Item>
              <Menu.Item key="19" icon={<FaBell />}>
                <Link to="/settings/mynotifications">My Notifications</Link>
              </Menu.Item>
              <Menu.Item key="20" icon={<FaUserCog />}>
                <Link to="/settings/messages">Messages</Link>
              </Menu.Item>
              <Menu.Item key="21" icon={<FaShieldAlt />}>
                <Link to="/settings/security">Security</Link>
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Divider />
          </Menu>
        </Sider>
        <Content>
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
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
