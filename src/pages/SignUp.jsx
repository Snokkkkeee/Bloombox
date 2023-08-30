import React from "react";
<<<<<<< HEAD
import {
  Layout,
  Menu,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
  Row,
  Col,
} from "antd";
import { Link } from "react-router-dom";
import {
  DribbbleOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
// import "/Users/jwsnooke/Desktop/Bloombox Layout/src/App.jsx"
// import backgroundImage from 'src\assets\body-background.png';

const { Title } = Typography;
const { Header, Footer, Content } = Layout;

const StyledFormItem = styled(Form.Item)`
  .ant-form-item-label {
    label {
      color: deeppurple;
      padding: 15px;
      margin: 10px;
    }
  }
  .ant-input {
    margin: 10px;
    padding: 15px;
    border-radius: 20px;
    border: 1px solid blue;
    &:hover {
      border-color: deepurple;
    }
  }
`;
=======
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
>>>>>>> 4596cb00603e13ff29c93187f6d69210198593de

export default function SignUp() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
<<<<<<< HEAD
    <Layout
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Row justify="center">
            <Col span={16}>
              <Title style={{ color: "white" }}>Sign Up</Title>
              <p>
                Use these awesome forms to login or create new account in your
                project for free.
              </p>
              <Card title="Register With">
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <StyledFormItem
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                        type: "email",
                      },
                    ]}
                  >
                    <Input />
                  </StyledFormItem>
                  <StyledFormItem
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </StyledFormItem>
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
=======
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
     
>>>>>>> 4596cb00603e13ff29c93187f6d69210198593de
        </div>
      </Content>
    </Layout>
  );
}

