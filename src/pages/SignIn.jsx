import React from 'react';
import {
  Layout,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
  Row,
  Col,
} from "antd";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import backgroundImage from '/Users/jwsnooke/Desktop/Bloombox Layout/src/assets/body-background.png';


const { Title } = Typography;
const { Header, Content } = Layout;

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

export default function SignIn() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'}}>

      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          <Row justify="center">
            <Col span={16}>
            <Title style={{ color: 'white' }}>Sign In</Title>
             
              <Card title="Login With">
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
                        type: 'email'
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
              <p>
                Don't have an account?<Link to="/authentication/signup">Sign In</Link>
              </p>
            </Col>
          </Row>
        </div>
      </Content>
     
    </Layout>
  );
}
