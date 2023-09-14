import React, { useState } from 'react';
import { Layout, Menu, Dropdown, Avatar, Image, Input, Badge, Tooltip } from 'antd';
import { UserOutlined, BellOutlined, SearchOutlined, AppstoreOutlined, InboxOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { SubMenu } = Menu;

const userMenuItems = [
  { key: "1", text: "Sign In", link: "/authentication/signin" },
  { key: "2", text: "Sign Up", link: "/authentication/signup" },
  { key: "3", text: "Reset Password", link: "/authentication/resetpassword" },
];

const subMenuItems = [
  { key: "setting:1", text: "My Account", link: "/settings/myaccount", icon: <UserOutlined /> },
  { key: "setting:2", text: "My Notifications", link: "/settings/mynotifications", icon: <BellOutlined /> },
  { key: "setting:3", text: "Inbox", link: "/messages/inbox", icon: <InboxOutlined /> },
];

const Navbar = () => {

  const [selectedKeys, setSelectedKeys] = useState([]);

   const handleMenuClick = (e) => {
    setSelectedKeys([e.key]);
  };

  const handleMenuMouseLeave = () => {
    setSelectedKeys([]);
  };

  const userMenu = (
    <Menu>
      {userMenuItems.map(item => (
        <Menu.Item key={item.key}>
          <Link to={item.link}>{item.text}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  const renderMenu = () => (
    <Menu theme="dark" mode="horizontal"  selectedKeys={selectedKeys}
        onClick={handleMenuClick}
        onMouseLeave={handleMenuMouseLeave} style={{ display: 'flex', alignItems: 'center' }}>
      <Menu.Item key="1">
        <Avatar>G</Avatar>
        <span style={{ marginLeft: 20 }}>Gavin Prinsloo</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          style={{ width: 200 }}
        />
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<AppstoreOutlined />} title="Navigation">
        {subMenuItems.map(item => (
          <Menu.Item key={item.key}>
            <Link to={item.link}>
              {item.icon}
              {item.text}
            </Link>
          </Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', height: '48px' }}>
      <Image
        width={170}
        src="/src/assets/GrowBox.png"
        preview={false}
      />
      {renderMenu()}
      <Menu theme="dark" mode="horizontal"  selectedKeys={selectedKeys}
        onClick={handleMenuClick}
        onMouseLeave={handleMenuMouseLeave} style={{ display: 'flex', alignItems: 'center' }}>
        <Menu.Item key="3">
          <Tooltip title="Notifications">
            <Badge count={5}>
              <BellOutlined style={{ color: 'white' }} />
            </Badge>
          </Tooltip>
        </Menu.Item>
        <Menu.Item key="4">
          <Dropdown menu={userMenu} trigger={['click']}>
            <UserOutlined style={{ color: 'white' }} />
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
