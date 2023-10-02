import React, { useState } from 'react';
import { Layout, Table, Button, Space, Input, Tag, Switch, Tooltip } from 'antd';
import { SearchOutlined, SyncOutlined, PoweroffOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Search } = Input;

function Databases() {
  const [databases, ] = useState([
    { key: '1', name: 'Database 1', status: 'Online', type: 'MySQL', size: '20GB' },
    { key: '2', name: 'Database 2', status: 'Offline', type: 'PostgreSQL', size: '10GB' },
    // Add more databases as needed
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
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button icon={<SyncOutlined />} onClick={() => handleRestart(record.key)}>Restart</Button>
          <Switch
            checkedItems={<PoweroffOutlined />}
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
    // Implement database restart logic here
    console.log(`Restarting database with key: ${key}`);
  };

  const handleToggleStatus = (key, checked) => {
    // Implement database status toggle logic here
    console.log(`Toggling database status for key: ${key}, checked: ${checked}`);
  };

  return (
    <Content style={{ padding: '24px', background: '#f0f2f5' }}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Space style={{ marginBottom: '16px' }}>
          <Search
            placeholder="Search databases"
            enterButton={<SearchOutlined />}
            style={{ width: 300 }}
          />
          <Button type="primary">Add Database</Button>
        </Space>
        <Table columns={columns} dataSource={databases} />
      </Space>
    </Content>
  );
}

export default Databases;
