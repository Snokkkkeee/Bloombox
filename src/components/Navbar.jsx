import React from 'react';
import { Layout, Menu, Dropdown, Avatar, Image, Input, Badge, Tooltip } from 'antd';
import { UserOutlined, BellOutlined, SearchOutlined, AppstoreOutlined, MailOutlined, SettingOutlined, HomeOutlined, InboxOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {
  const userMenu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/authentication/signin">Sign In</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/authentication/signup">Sign Up</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/authentication/resetpassword">Reset Password</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', height: '48px' }}>
      <Image
        width={170}
        src="/src/assets/GrowBox.png"
        preview={false}
      />
      <Menu theme="dark" mode="horizontal" style={{ display: 'flex', alignItems: 'center' }}>
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
          <Menu.Item key="setting:1">
            <Link to="/settings/myaccount">
              <UserOutlined />
              My Account
            </Link>
          </Menu.Item>
          <Menu.Item key="setting:2">
            <Link to="/settings/mynotifications">
              <BellOutlined />
              My Notifications
            </Link>
          </Menu.Item>
          <Menu.Item key="setting:3">
            <Link to="/messages/inbox">
              <InboxOutlined />
              Inbox
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
      <Menu theme="dark" mode="horizontal" style={{ display: 'flex', alignItems: 'center' }}>
        <Menu.Item key="3">
          <Tooltip title="Notifications">
            <Badge count={5}>
              <BellOutlined style={{ color: 'white' }} />
            </Badge>
          </Tooltip>
        </Menu.Item>
        <Menu.Item key="4">
          <Dropdown overlay={userMenu} trigger={['click']}>
            <SettingOutlined style={{ color: 'white' }} />
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
