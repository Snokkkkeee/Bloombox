import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Layout,Popover, Input, Menu, Dropdown, Avatar, Typography, Badge, Image, Space, } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGear, faHouseUser, faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import moment from 'moment';


const { Header } = Layout;
const { Text,  } = Typography;
const { Item } = Menu;
const { Search } = Input;

const Navbar = () => {
  const [, setNotifAnchorEl] = useState(null);
  const { user, setUser } = useUser();


useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.uid) {
        try {
          const db = getFirestore();
          const userRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userRef);
          
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({ ...user, ...userData }); // Update the user data with the fetched data
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user, setUser]);

  const handleNotifMenuOpen = (event) => {
    setNotifAnchorEl(event.currentTarget);
  };

  const handleNotifMenuClose = () => {
    setNotifAnchorEl(null);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const userProfileContent = (
    <div>
      <p><strong>{user?.username || user?.name || 'User'}</strong></p>
      <p>Email: {user?.email || 'N/A'}</p>
      <p>Last Login: {user?.lastLogin ? moment(user.lastLogin).fromNow() : 'N/A'}</p>
    </div>
  );

  const userMenu = (
    <Menu>
      <Item>
        <Link to="/dashboard" onClick={handleNotifMenuClose}>Home</Link>
      </Item>
      <Item>
        <Link to="/settings/myaccount" onClick={handleNotifMenuClose}>My Account</Link>
      </Item>
      <Item>
        <Link to="/settings/messages" onClick={handleNotifMenuClose}>Messages</Link>
      </Item>
      <Item>
        <Link to="/logout" onClick={handleNotifMenuClose}>Sign Out</Link>
      </Item>
    </Menu>
  );

  const settingsMenu = (
    <Menu>
      <Item>
        <Link to="/settings/security" onClick={handleNotifMenuClose}>Security & Privacy</Link>
      </Item>
      <Item>
        <Link to="/monitor/servers" onClick={handleNotifMenuClose}>Networks</Link>
      </Item>
    </Menu>
  );

  const notifMenu = (
    <Menu>
      <Item>
        <Link to="/settings/mynotifications" onClick={handleNotifMenuClose}>My Notifications</Link>
      </Item>
    </Menu>
  );

  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', backgroundColor: '#001529' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Image width={170} src="/src/assets/GrowBox.png" preview={false} />
       <Popover content={userProfileContent} title="User Profile" trigger="hover">
        <Avatar style={{ color: '#2accb6' }} >{user?.username ? user.username[0] : (user?.name ? user.name[0] : '')}</Avatar>
      </Popover>
    <Text style={{ color: '#acecee', padding: '5px', boxShadow: '6px 4px #00A4BD', border: "2px solid ", borderRadius: "15px" , borderWidth: '100%', borderColor: '#2accb6'}}>{user?.username || user?.name || ''}</Text>
      </div>
      
     
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
         <Search  placeholder="Type here..." allowClear onSearch={onSearch}  prefix={<FontAwesomeIcon icon={faSearch} style={{ color: '#4bbbcf', }} />} style={{backgroundColor: 'rgb(15, 21, 53)', marginLeft: '10px',width: 180, borderRadius: '10px' }} />
        <Space direction="vertical" size={16}>
        <Space size={16} wrap>
      
       
        
        <Dropdown overlay={notifMenu} trigger={['click']}>
          <Badge size="small" count={'1'}>
          <FontAwesomeIcon icon={faBell} shake size="lg" style={{color: "#acecee",cursor: 'pointer'}}   onClick={handleNotifMenuOpen} />
          </Badge>
        </Dropdown>
        
       <Dropdown overlay={settingsMenu} trigger={['click']}>
          <FontAwesomeIcon icon={faGear} size="lg" style={{ color: '#acecee', cursor: 'pointer' }} />
        </Dropdown>
        
        <Dropdown overlay={userMenu} trigger={['click']}>
          <FontAwesomeIcon icon={faHouseUser} size="lg" style={{ color: '#acecee', cursor: 'pointer' }} />
        </Dropdown>
         </Space>
         </Space>
      </div>
    </Header>
  );
};

export default Navbar;
