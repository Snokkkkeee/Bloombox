import React, { useState } from 'react';
import { Layout, Input, Menu, Dropdown, Avatar, Typography, Badge, Image } from 'antd';
import { 
  NotificationOutlined, 
  SettingOutlined, 
  UserOutlined, 
  SearchOutlined 
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Text, Title } = Typography;
const { Item } = Menu;

const Navbar = ({ title, subtitle }) => {
  const [notifAnchorEl, setNotifAnchorEl] = useState(null);

  const handleNotifMenuOpen = (event) => {
    setNotifAnchorEl(event.currentTarget);
  };

  const handleNotifMenuClose = () => {
    setNotifAnchorEl(null);
  };

  const userMenu = (
    <Menu>
      <Item>
        <Link to="/myaccount" onClick={handleNotifMenuClose}>My Account</Link>
      </Item>
      <Item>
        <Link to="/messages" onClick={handleNotifMenuClose}>Messages</Link>
      </Item>
      <Item>
        <Link to="/signout" onClick={handleNotifMenuClose}>Sign Out</Link>
      </Item>
    </Menu>
  );

  const notifMenu = (
    <Menu>
      <Item>
        <Link to="/notifications" onClick={handleNotifMenuClose}>My Notifications</Link>
      </Item>
    </Menu>
  );

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px', backgroundColor: '#001529' }}>
      <Image width={170} src="/src/assets/GrowBox.png" preview={false} />
      
      <Input 
        placeholder="Search" 
        prefix={<SearchOutlined />} 
        style={{ width: 200, borderRadius: '3px' }} 
      />
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Title level={2} style={{ color: 'white', margin: '0 0 5px 0' }}>{title}</Title>
        <Text style={{ color: 'white' }}>{subtitle}</Text>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar>G</Avatar>
        <Text style={{ marginLeft: '20px', color: 'white' }}>Gavin Prinsloo</Text>
        
        <Dropdown overlay={notifMenu} trigger={['click']}>
          <Badge count={5}>
            <NotificationOutlined style={{ color: 'white', marginLeft: '20px' }} />
          </Badge>
        </Dropdown>
        
        <SettingOutlined style={{ color: 'white', marginLeft: '20px' }} />
        
        <Dropdown overlay={userMenu} trigger={['click']}>
          <UserOutlined style={{ color: 'white', marginLeft: '20px' }} />
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
