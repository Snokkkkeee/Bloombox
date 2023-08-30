import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Layout,
  Typography,
  Checkbox,
  Row,
  Col,
  Card,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/c71c3bbd-6268-43da-aa49-14ce1d1700f1.png";
import { signUp } from "../Services/auth";
import Styled from "styled-components";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Services/firebase";
import { setDoc, doc } from "firebase/firestore";

const { Content } = Layout;
const { Title, Text } = Typography;

const StyledFormItem = Styled(Form.Item)`
  /* Your styled component styles here */
`;

const buttonStyle = {
  width: "80%",
  height: "40px",
  fontSize: "16px",
  borderRadius: "15px",
  border: "none",
  marginBottom: "10px",
};

export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // Create a document in Firestore with the user's data
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: values.email,
        nickname: values.nickname,
      });

      navigate("/");
    } catch (error) {
      console.error("Error during sign up:", error);
      setErrorMessage("Unable to sign up. Please try again later.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "50vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
            Sign Up
          </Title>
          <Text type="secondary" style={{ marginBottom: "30px" }}>
            Use these awesome forms to sign up for free.
          </Text>

          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
              <Input />
            </StyledFormItem>
            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={buttonStyle}>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          {errorMessage && (
            <Text type="danger" style={{ marginBottom: "15px" }}>
              {errorMessage}
            </Text>
          )}
        </div>
      </Content>
    </Layout>
  );
}
