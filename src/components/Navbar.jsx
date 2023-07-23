import React from 'react';
import { Layout, Menu, Dropdown, Avatar, Image, Input, Badge, Tooltip } from 'antd';
import { UserOutlined, BellOutlined, SearchOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {
  const userMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
      <Image
        width={220}
        src="/src/assets/GrowBox.png"
        preview={false}
      />
      <Menu theme="dark" mode="horizontal" style={{ display: 'flex', alignItems: 'center' }}>
        <Menu.Item key="1">
          <Avatar>G</Avatar>
          <span style={{ marginLeft: 20    }}>Gavin Prinsloo</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            style={{ width: 200 }}
          />
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<AppstoreOutlined />} title="Navigation">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
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
