import React from "react";
<<<<<<<<< Temporary merge branch 1
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
=========
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
>>>>>>>>> Temporary merge branch 2

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  const onFinish = async (values) => {
    try {
      // Call the signUp function with user data
      await signUp({
        email: values.email,
        password: values.password,
        nickname: values.nickname,
      });

      // Redirect to login page after successful signup
      navigate("/SignIn");
    } catch (error) {
      setErrorMessage("Unable to sign up. Please try again later.");
    }
  };

  return (
<<<<<<<<< Temporary merge branch 1
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
=========
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
              <Input style={inputStyle} />
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
              <Input.Password style={inputStyle} />
            </StyledFormItem>
            <StyledFormItem
              label="Nickname"
              name="nickname"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                },
              ]}
            >
              <Input style={inputStyle} />
            </StyledFormItem>
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
          {errorMessage && (
            <Text type="danger" style={{ marginBottom: "15px" }}>
              {errorMessage}
            </Text>
          )}
          <Button
            icon={<GoogleOutlined />}
            style={{
              width: "60%",
              height: "40px",
              fontSize: "16px",
              backgroundColor: "#2accb6",
              color: "white",
              borderRadius: "15px",
              border: "none",
              marginBottom: "15px",
            }}
          >
            Sign up with Google
          </Button>
          <Button
            icon={<GithubOutlined />}
            style={{
              width: "60%",
              height: "40px",
              fontSize: "16px",
              backgroundColor: "#333",
              color: "white",
              borderRadius: "15px",
              border: "none",
              marginBottom: "15px",
            }}
          >
            Sign up with GitHub
          </Button>
          <hr />
          <Link to="/SignIn">
            <Text type="secondary">Back to Sign In</Text>
            </Link>          
          </Tooltip>
     
>>>>>>>>> Temporary merge branch 2
        </div>
      </Content>
    </Layout>
  );
}
