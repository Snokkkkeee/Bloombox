import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Layout,
  Typography,
} from 'antd';
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { signUp } from "../firebase/auth";
import logo from '../assets/GrowBox.png';
import backgroundImage from '../assets/c71c3bbd-6268-43da-aa49-14ce1d1700f1.png';

const { Content } = Layout;
const { Title, Text } = Typography;

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '10px',
  color: '#333',
};

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const { user, errorMessage } = await signUp(values);
      if (user) {
navigate('/SignIn');
      } else {
        setErrorMessage(errorMessage);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Layout style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      minHeight: '100vh',
      minWidth: '50vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Content style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '50px',
      }}>
        <div style={{
          maxWidth: '1000px',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '50px',
          borderRadius: '25px',
          textAlign: 'center',
          margin: '20px',
        }}>
         <Title level={2} style={{ color: "#2accb6", marginBottom: "20px" }}>
            Sign Up {" "}
            <img
              src={logo}
              alt="GrowBox"
              style={{
                width: "200px",
                verticalAlign: "middle",
                marginBottom: "20px",
              }}
            />
          </Title>
          <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} style={{ marginTop: '30px' }}>
            <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
              <Input prefix={<UserOutlined />} placeholder="Email" style={inputStyle} />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Password" style={inputStyle} />
            </Form.Item>
            <Form.Item name="nickname" rules={[{ required: true, message: 'Please input your Nickname!' }]}>
              <Input prefix={<UserOutlined />} placeholder="Nickname" style={inputStyle} />
            </Form.Item>
            {errorMessage && (<Text type="danger" style={{ marginBottom: '15px' }}>{errorMessage}</Text>)}
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{
                width: '80%',
                height: '40px',
                fontSize: '16px',
                borderRadius: '15px',
                border: 'none',
                marginBottom: '10px',
              }}>Sign Up</Button>
            </Form.Item>
          </Form>
          <Button icon={<GoogleOutlined />} style={{
            width: '60%',
            height: '40px',
            fontSize: '16px',
            backgroundColor: '#2accb6',
            color: 'white',
            borderRadius: '15px',
            border: 'none',
            marginBottom: '15px',
          }}>Sign Up with Google</Button>
          <Button icon={<GithubOutlined />} style={{
            width: '60%',
            height: '40px',
            fontSize: '16px',
            backgroundColor: '#333',
            color: 'white',
            borderRadius: '15px',
            border: 'none',
            marginBottom: '15px',
          }}>Sign Up with GitHub</Button>
        
          <div style={{marginTop: "15px"}}>
          Already have an account?
          </div>
          <Button
            type="link"
            onClick={() => navigate("/SignIn")}
            htmlType="submit"
            style={{
              width: "80%",
              height: "40px",
              fontSize: "16px",
              borderRadius: "15px",
              border: "none",
              marginBottom: "10px",
            }}
          >
            Sign In
          </Button>
        </div>
      </Content>
    </Layout>
  );
}
