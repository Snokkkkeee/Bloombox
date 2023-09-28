import React from 'react';
import { Button, Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useUser } from '../context/UserContext'; // Import useUser from UserContext
import backgroundImage from '../assets/c71c3bbd-6268-43da-aa49-14ce1d1700f1.png';
import logo from '../assets/GrowBox.png';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function Logout() {
  const navigate = useNavigate();
  const { setUser } = useUser(); // Use setUser from useUser
  
  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth); // Sign out the user from Firebase
      
      setUser(null); // Clear user state
      
      // Clear user-related data from local storage, session storage, or cookies
      
      
      navigate('/SignIn'); // Navigate to the SignIn page after logout
    } catch (error) {
      console.error('Error during sign out:', error);
      // Optionally: Display an error message to the user
    }
  };

  return (
    <Layout
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        minWidth: '50vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Content
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '50px',
            borderRadius: '25px',
            textAlign: 'center',
            margin: '20px',
          }}
        >
          <Title level={2} style={{ color: '#2accb6', marginBottom: '20px' }}>
            You are logged in to{' '}
            <img
              src={logo}
              alt='GrowBox'
              style={{
                width: '200px',
                verticalAlign: 'middle',
                marginBottom: '20px',
              }}
            />
          </Title>
          <Text type='secondary' style={{ marginBottom: '30px' }}>
            Are you sure you want to logout?
          </Text>
          <Button
            type='primary'
            onClick={handleLogout}
            style={{
              width: '80%',
              height: '40px',
              fontSize: '16px',
              borderRadius: '15px',
              border: 'none',
              marginBottom: '10px',
            }}
          >
            Logout
          </Button>
        </div>
      </Content>
    </Layout>
  );
}
