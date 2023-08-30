import React, { useState } from 'react';
import { Form, Input, Button, Layout, Typography, Checkbox, Tooltip, Row, Col } from 'antd';
import { UserOutlined, GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/GrowBox.png';
import backgroundImage from '../assets/c71c3bbd-6268-43da-aa49-14ce1d1700f1.png';
import Styled from "styled-components"
const { Content } = Layout;
const { Title, Text } = Typography;



export default function SignUp() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      // Replace with your signUp logic
      await signUp({
        email: values.email,
        password: values.password,
        nickname: values.nickname,
      });

      navigate('/SignIn');
    } catch (error) {
      setErrorMessage('Unable to sign up. Please try again later.');
    }
  };

  return (
    <Layout style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Row justify="center">
            <Col span={16}>
              <Title style={{ color: 'white' }}>Sign Up</Title>
              <p>Use these awesome forms to login or create a new account in your project for free.</p>
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
                        message: 'Please input your email!',
                        type: 'email',
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
                        message: 'Please input your password!',
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
        </div>
      </Content>
    </Layout>
  );
}
