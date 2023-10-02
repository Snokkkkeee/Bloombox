import React from 'react';
import { Layout, List, Avatar, Input,  } from 'antd';
import { UserOutlined, MenuFoldOutlined,  } from '@ant-design/icons';
import styled from 'styled-components';

const { Header, Content, } = Layout;

const { Search } = Input;

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0;
`;

const StyledContent = styled(Content)`
  margin: 0 16px;
`;


const messages = [
  {
    title: 'Message from John',
    icon: <UserOutlined />,
    content: 'Hey, how are you doing?',
  },
  {
    title: 'Message from Sarah',
    icon: <UserOutlined />,
    content: 'Don\'t forget our meeting tomorrow!',
  },
];

const Messages = () => (
  <Layout style={{ }}>
  


    <Layout>
      <StyledHeader>
        <MenuFoldOutlined />
      </StyledHeader>
      <StyledContent>
 
        <Search placeholder="Search messages" onSearch={value => console.log(value)} enterButton />
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <List
            itemLayout="horizontal"
            dataSource={messages}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar icon={item.icon} />}
                  title={<a href="#">{item.title}</a>}
                  description={item.content}
                />
              </List.Item>
            )}
          />
        </div>
      </StyledContent>

    </Layout>
  </Layout>
);

export default Messages;
