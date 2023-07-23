import React from 'react';
import { Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaChartPie, FaInbox, FaPaperPlane, FaArchive, FaListAlt, FaUserFriends, FaUserShield, FaUserTag, FaServer, FaDatabase, FaDesktop, FaNetworkWired, FaUserCircle, FaBell, FaUserCog, FaShieldAlt, FaSignInAlt, FaUserPlus, FaKey, FaUserLock, FaEnvelopeOpen, FaUserCheck, FaUserTie, FaUserClock, FaUserSecret } from 'react-icons/fa';

const { Title } = Typography;

function Sidebar() {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Title level={3} style={{ color: 'white', margin: '10px' }}>Gavin Prinsloo</Title>
      <Menu.Divider />
      <Menu.Item key="1" icon={<FaHome />}><Link to="/dashboard">Dashboard</Link></Menu.Item>
      <Menu.Divider />
      <Menu.SubMenu key="sub1" icon={<FaChartBar />} title="Overview">
        <Menu.Item key="2" icon={<FaHome />}><Link to="/overview/main">Main</Link></Menu.Item>
        <Menu.Item key="3" icon={<FaChartBar />}><Link to="/overview/analytics">Analytics</Link></Menu.Item>
        <Menu.Item key="4" icon={<FaChartPie />}><Link to="/overview/reports">Reports</Link></Menu.Item>
        <Menu.Item key="5" icon={<FaChartPie />}><Link to="/overview/summary">Summary</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.Divider />
      <Menu.SubMenu key="sub2" icon={<FaEnvelopeOpen />} title="Messages">
        <Menu.Item key="6" icon={<FaInbox />}><Link to="/messages/inbox">Inbox</Link></Menu.Item>
        <Menu.Item key="7" icon={<FaPaperPlane />}><Link to="/messages/sent">Sent</Link></Menu.Item>
        <Menu.Item key="8" icon={<FaEnvelopeOpen />}><Link to="/messages/drafts">Drafts</Link></Menu.Item>
        <Menu.Item key="9" icon={<FaArchive />}><Link to="/messages/archive">Archive</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.Divider />
      <Menu.SubMenu key="sub3" icon={<FaUserCheck />} title="Users">
        <Menu.Item key="10" icon={<FaListAlt />}><Link to="/users/list">User List</Link></Menu.Item>
        <Menu.Item key="11" icon={<FaUserFriends />}><Link to="/users/friends">Friends</Link></Menu.Item>
        <Menu.Item key="12" icon={<FaUserShield />}><Link to="/users/admins">Admins</Link></Menu.Item>
        <Menu.Item key="13" icon={<FaUserTag />}><Link to="/users/roles">User Roles</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.Divider />
      <Menu.SubMenu key="sub4" icon={<FaDesktop />} title="Monitor">
        <Menu.Item key="14" icon={<FaServer />}><Link to="/monitor/servers">Servers</Link></Menu.Item>
        <Menu.Item key="15" icon={<FaDatabase />}><Link to="/monitor/databases">Databases</Link></Menu.Item>
        <Menu.Item key="16" icon={<FaDesktop />}><Link to="/monitor/systems">Systems</Link></Menu.Item>
        <Menu.Item key="17" icon={<FaNetworkWired />}><Link to="/monitor/networks">Networks</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.Divider />
      <Menu.SubMenu key="sub5" icon={<FaUserCog />} title="Settings">
        <Menu.Item key="18" icon={<FaUserCircle />}><Link to="/settings/myaccount">My Account</Link></Menu.Item>
        <Menu.Item key="19" icon={<FaBell />}><Link to="/settings/mynotifications">My Notifications</Link></Menu.Item>
        <Menu.Item key="20" icon={<FaUserCog />}><Link to="/settings/preferences">Preferences</Link></Menu.Item>
        <Menu.Item key="21" icon={<FaShieldAlt />}><Link to="/settings/security">Security</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.Divider />
      <Menu.SubMenu key="sub6" icon={<FaUserLock />} title="Authentication">
        <Menu.Item key="22" icon={<FaSignInAlt />}><Link to="/authentication/signin">Sign In</Link></Menu.Item>
        <Menu.Item key="23" icon={<FaUserPlus />}><Link to="/authentication/signup">Sign Up</Link></Menu.Item>
        <Menu.Item key="24" icon={<FaKey />}><Link to="/authentication/forgotpassword">Forgot Password</Link></Menu.Item>
        <Menu.Item key="25" icon={<FaKey />}><Link to="/authentication/resetpassword">Reset Password</Link></Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}

export default Sidebar;
