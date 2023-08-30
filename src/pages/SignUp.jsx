import React, { useState } from "react";
import { Form, Input, Button, Layout, Typography, Checkbox, Card } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../Services/auth"; // Import the signUp function

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

const StyledFormItem = styled(Form.Item)`
  // Add your styling here...
`;

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
    <Layout
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
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
        </div>
      </Content>
    </Layout>
  );
}
