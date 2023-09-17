import React from "react";
import { Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import { FaHome, FaDesktop, FaWifi, FaUserCog, FaChartBar, FaServer, FaDatabase, FaNetworkWired, FaUserCircle, FaBell, FaTree, FaShieldAlt } from "react-icons/fa";

const { Title } = Typography;

const menuData = [
  {
    key: "1",
    icon: <FaHome />,
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    key: "sub1",
    icon: <FaDesktop />,
    text: "Overview",
    subMenu: [
      { key: "3", icon: <FaChartBar />, text: "Analytics", link: "/overview/analytics" },
    ],
  },
  {
    key: "sub4",
    icon: <FaWifi />,
    text: "Monitor",
    subMenu: [
      { key: "14", icon: <FaServer />, text: "Servers", link: "/monitor/servers" },
      { key: "15", icon: <FaDatabase />, text: "Databases", link: "/monitor/databases" },
      { key: "16", icon: <FaNetworkWired />, text: "Networks", link: "/monitor/networks" },
    ],
  },
  {
    key: "sub5",
    icon: <FaUserCog />,
    text: "Settings",
    subMenu: [
      { key: "18", icon: <FaUserCircle />, text: "My Account", link: "/settings/myaccount" },
      { key: "19", icon: <FaBell />, text: "My Notifications", link: "/settings/mynotifications" },
      { key: "20", icon: <FaUserCog />, text: "Messages", link: "/settings/messages" },
      { key: "21", icon: <FaShieldAlt />, text: "Security", link: "/settings/security" },
      
       
    ],
  },
  { key: "22",  
    icon: <FaTree />,  
    text: "My Gardens",  
    link: "/gardens", 
       },
];

export default function Sidebar() {
  const renderMenuItem = (item) => (
    <Menu.Item key={item.key} icon={item.icon}>
      <Link to={item.link}>{item.text}</Link>
    </Menu.Item>
  );

  const renderSubMenu = (item) => (
    <Menu.SubMenu key={item.key} icon={item.icon} title={item.text}>
      {item.subMenu.map(renderMenuItem)}
    </Menu.SubMenu>
  );

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
      >
    
      </Title>{" "}
      <Menu.Divider />
      {menuData.map((item) =>
        item.subMenu ? renderSubMenu(item) : renderMenuItem(item)
      )}
    </Menu>
  );
}
