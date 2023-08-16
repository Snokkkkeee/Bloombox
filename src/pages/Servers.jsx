import React, { useState } from 'react';
import { Layout, Table, Button, Space, Input, Tag, Switch } from 'antd';
import { SearchOutlined, SyncOutlined, PoweroffOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Search } = Input;

function Servers() {
  const [servers, setServers] = useState([
    { key: '1', name: 'Server 1', status: 'Online', ip: '192.168.1.1', cpu: '20%', memory: '4GB' },
    { key: '2', name: 'Server 2', status: 'Offline', ip: '192.168.1.2', cpu: '10%', memory: '8GB' },
    // Add more servers as needed
  ]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Online' ? 'green' : 'red'}>{status}</Tag>
      ),
    },
    {
      title: 'IP Address',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: 'CPU Usage',
      dataIndex: 'cpu',
      key: 'cpu',
    },
    {
      title: 'Memory',
      dataIndex: 'memory',
      key: 'memory',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button icon={<SyncOutlined />} onClick={() => handleRestart(record.key)}>Restart</Button>
          <Switch
            checkedChildren={<PoweroffOutlined />}
            unCheckedChildren={<PoweroffOutlined />}
            defaultChecked={record.status === 'Online'}
            onChange={(checked) => handleToggleStatus(record.key, checked)}
          />
        </Space>
      ),
    },
  ];

  const handleRestart = (key) => {
    // Implement server restart logic here
    console.log(`Restarting server with key: ${key}`);
  };

  const handleToggleStatus = (key, checked) => {
    // Implement server status toggle logic here
    console.log(`Toggling server status for key: ${key}, checked: ${checked}`);
  };

  return (
    <Content style={{ padding: '24px', background: '#f0f2f5' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space style={{ marginBottom: '16px' }}>
          <Search
            placeholder="Search servers"
            enterButton={<SearchOutlined />}
            style={{ width: 300 }}
          />
          <Button type="primary">Add Server</Button>
        </Space>
        <Table columns={columns} dataSource={servers} />
      </Space>
    </Content>
  );
}

export default Servers;
