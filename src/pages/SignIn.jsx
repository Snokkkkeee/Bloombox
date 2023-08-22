import React, { useState } from 'react'; // Import useState
import { Form, Input, Button, Layout, Typography } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import { Navigate } from 'react-router-dom'; // Import Navigate
import logo from '/Users/jwsnooke/Desktop/Bloombox Layout/src/assets/GrowBox.png';
import backgroundImage from '/Users/jwsnooke/Desktop/Bloombox Layout/src/assets/c71c3bbd-6268-43da-aa49-14ce1d1700f1.png';

const { Content } = Layout;
const { Title, Text } = Typography;

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '10px',
  color: '#333',
};

export default function SignIn({ authenticate }) {
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  const onFinish = (values) => {
    // Mock authentication with username "1234" and password "1234"
    if (values.username === '12345' && values.password === '12345') {
      authenticate();
      setRedirectToDashboard(true);
    } else {
      console.log('Authentication failed');
    }
  };

  if (redirectToDashboard) {
    return <Navigate to="/dashboard" />; // Use Navigate component for redirection
  }

  return (
     <Layout style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh', minWidth: '50vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
        <div style={{ maxWidth: '1000px', background: 'rgba(255, 255, 255, 0.9)', padding: '50px', borderRadius: '25px', textAlign: 'center', margin: '20px' }}>
          <Title level={2} style={{ color: '#2accb6', marginBottom: '20px' }}>Connect to <img src={logo} alt="BloomBox" style={{ width: '200px', verticalAlign: 'middle', marginBottom: '20px' }} /></Title>
          <Text type="secondary" style={{ marginBottom: '30px' }}>Sign in to continue to your dashboard</Text>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{ marginTop: '30px' }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username/Email" style={inputStyle} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input prefix={<LockOutlined />} type="password" placeholder="Password" style={inputStyle} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '80%', height: '40px', fontSize: '16px', borderRadius: '15px', border: 'none', marginBottom: '10px' }}>
                Log in
              </Button>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <a href="/authentication/forgotpassword">Forgot password</a>
                <a href="/authentication/signup">Create account</a>
              </div>
            </Form.Item>
          </Form>
          <hr />
          <br />
          <Button icon={<GoogleOutlined />} style={{ width: '60%', height: '40px', fontSize: '16px', backgroundColor: '#2accb6', color: 'white', borderRadius: '15px', border: 'none', marginBottom: '15px' }}>
            Sign in with Google
          </Button>
          <Button icon={<GithubOutlined />} style={{ width: '60%', height: '40px', fontSize: '16px', backgroundColor: '#333', color: 'white', borderRadius: '15px', border: 'none', marginBottom: '15px' }}>
            Sign in with GitHub
          </Button>
        </div>
      </Content>
    </Layout>
  );
}
