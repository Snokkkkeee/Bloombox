import React, { useState } from 'react';
import { Layout, Table, Button, Space, Input, Tag, Switch, Tooltip, Progress } from 'antd';
import { SearchOutlined, SyncOutlined, PoweroffOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Search } = Input;

function Systems() {
  const [systems, setSystems] = useState([
    { key: '1', name: 'System 1', status: 'Online', type: 'Linux', cpu: 75, memory: 60 },
    { key: '2', name: 'System 2', status: 'Offline', type: 'Windows', cpu: 40, memory: 30 },
    // Add more systems as needed
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
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'CPU Usage',
      dataIndex: 'cpu',
      key: 'cpu',
      render: (cpu) => (
        <Progress percent={cpu} />
      ),
    },
    {
      title: 'Memory Usage',
      dataIndex: 'memory',
      key: 'memory',
      render: (memory) => (
        <Progress percent={memory} />
      ),
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
          <Tooltip title="More Info">
            <Button shape="circle" icon={<InfoCircleOutlined />} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const handleRestart = (key) => {
    // Implement system restart logic here
    console.log(`Restarting system with key: ${key}`);
  };

  const handleToggleStatus = (key, checked) => {
    // Implement system status toggle logic here
    console.log(`Toggling system status for key: ${key}, checked: ${checked}`);
  };

  return (
    <Content style={{ padding: '24px', background: '#f0f2f5' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space style={{ marginBottom: '16px' }}>
          <Search
            placeholder="Search systems"
            enterButton={<SearchOutlined />}
            style={{ width: 300 }}
          />
          <Button type="primary">Add System</Button>
        </Space>
        <Table columns={columns} dataSource={systems} />
      </Space>
    </Content>
  );
}

export default Systems;
