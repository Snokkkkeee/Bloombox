import React, { useState } from 'react';
import { Layout, Table, Button, Space, Input, Tag, Switch, Tooltip, Progress } from 'antd';
import { SearchOutlined, SyncOutlined, PoweroffOutlined, InfoCircleOutlined, WifiOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Search } = Input;

function Networks() {
  const [networks, setNetworks] = useState([
    { key: '1', name: 'Network 1', status: 'Active', bandwidth: 75 },
    { key: '2', name: 'Network 2', status: 'Inactive', bandwidth: 40 },
    // Add more networks as needed
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
        <Tag color={status === 'Active' ? 'green' : 'red'}>{status}</Tag>
      ),
    },
    {
      title: 'Bandwidth Usage',
      dataIndex: 'bandwidth',
      key: 'bandwidth',
      render: (bandwidth) => (
        <Progress percent={bandwidth} />
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button icon={<SyncOutlined />} onClick={() => handleRefresh(record.key)}>Refresh</Button>
          <Switch
            checkedChildren={<WifiOutlined />}
            unCheckedChildren={<WifiOutlined />}
            defaultChecked={record.status === 'Active'}
            onChange={(checked) => handleToggleStatus(record.key, checked)}
          />
          <Tooltip title="More Info">
            <Button shape="circle" icon={<InfoCircleOutlined />} />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const handleRefresh = (key) => {
    // Implement network refresh logic here
    console.log(`Refreshing network with key: ${key}`);
  };

  const handleToggleStatus = (key, checked) => {
    // Implement network status toggle logic here
    console.log(`Toggling network status for key: ${key}, checked: ${checked}`);
  };

  return (
    <Content style={{ padding: '24px', background: '#f0f2f5' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space style={{ marginBottom: '16px' }}>
          <Search
            placeholder="Search networks"
            enterButton={<SearchOutlined />}
            style={{ width: 300 }}
          />
          <Button type="primary">Add Network</Button>
        </Space>
        <Table columns={columns} dataSource={networks} />
      </Space>
    </Content>
  );
}

export default Networks;
