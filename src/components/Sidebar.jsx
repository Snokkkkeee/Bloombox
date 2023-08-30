// Sidebar.jsx
import React from "react";
import { Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaChartPie,
  FaWifi,
  FaInbox,
  FaPaperPlane,
  FaArchive,
  FaListAlt,
  FaUserFriends,
  FaUserShield,
  FaUserTag,
  FaServer,
  FaDatabase,
  FaDesktop,
  FaNetworkWired,
  FaUserCircle,
  FaBell,
  FaUserCog,
  FaShieldAlt,
  FaSignInAlt,
  FaUserPlus,
  FaKey,
  FaUserLock,
  FaEnvelopeOpen,
  FaUserCheck,
  FaUserTie,
  FaUserClock,
  FaUserSecret,
  FaCanadianMapleLeaf,
  FaGlasses,
} from "react-icons/fa";

const { Title } = Typography;

export default function Sidebar() {
  return (
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
      {/* <Menu.SubMenu key="sub6" icon={<FaUserLock />} title="Authentication">
        <Menu.Item key="22" icon={<FaSignInAlt />}><Link to="/authentication/signin">Sign In</Link></Menu.Item>
        <Menu.Item key="23" icon={<FaUserPlus />}><Link to="/authentication/signup">Sign Up</Link></Menu.Item>
        <Menu.Item key="24" icon={<FaKey />}><Link to="/authentication/forgotpassword">Forgot Password</Link></Menu.Item>
      </Menu.SubMenu> */}
    </Menu>
  );
}
