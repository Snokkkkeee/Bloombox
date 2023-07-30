import React from 'react';
import { Table } from 'antd';

const TopLandingPages = ({ data }) => {
  const columns = [
    {
      title: 'Page',
      dataIndex: 'page',
      key: 'page',
    },
    {
      title: 'Visits',
      dataIndex: 'visits',
      key: 'visits',
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default TopLandingPages;
