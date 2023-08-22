import React from "react";
import { Form, Input, Button, Layout, Typography } from "antd";
import { UserOutlined, LockOutlined, GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; // Import Link
import { Tooltip } from 'antd'; // Import Tooltip
import logo from "../assets/GrowBox.png";
import backgroundImage from "../assets/c71c3bbd-6268-43da-aa49-14ce1d1700f1.png";

const { Content } = Layout;
const { Title, Text } = Typography;

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "10px",
  color: "#333",
};

export default function SignUp() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Layout style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh', minWidth: '50vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            background: "rgba(255, 255, 255, 0.9)",
            padding: "50px",
            borderRadius: "25px",
            textAlign: "center",
            margin: "20px",
          }}
        >
          <Title level={2} style={{ color: "#2accb6", marginBottom: "20px" }}>
            Create Account{" "}
            <img
              src={logo}
              alt="BloomBox"
              style={{
                width: "200px",
                verticalAlign: "middle",
                marginBottom: "20px",
              }}
            />
          </Title>
          <Text type="secondary" style={{ marginBottom: "30px" }}>
            Sign up to get started with your dashboard
          </Text>
          <Form
            name="normal_signup"
            className="signup-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{ marginTop: "30px" }}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                style={inputStyle}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Email!" },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Email"
                style={inputStyle}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
                style={inputStyle}
              />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              rules={[
                { required: true, message: "Please confirm your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Confirm Password"
                style={inputStyle}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
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
                Sign Up
              </Button>
            </Form.Item>
          </Form>
 <Button icon={<GoogleOutlined />} style={{ width: '60%', height: '40px', fontSize: '16px', backgroundColor: '#2accb6', color: 'white', borderRadius: '15px', border: 'none', marginBottom: '15px' }}>
            Sign up with Google
          </Button>
          <Button icon={<GithubOutlined />} style={{ width: '60%', height: '40px', fontSize: '16px', backgroundColor: '#333', color: 'white', borderRadius: '15px', border: 'none', marginBottom: '15px' }}>
            Sign up with GitHub
          </Button>
          <hr></hr>
           <Tooltip title="Go back to Sign In">
            <Link to="/"> 
            <Text type="secondary">Back to Sign In</Text>
            </Link>          
          </Tooltip>
     
        </div>
      </Content>
    </Layout>
  );
}

