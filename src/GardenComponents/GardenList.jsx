import React, { useState } from 'react';
import {
  Input,
  Select,
  Table,
  Collapse,
  Space,
  Button,
  Badge,
  Tooltip,
  Tabs,
  List,
  Tag,
  Timeline,
  Form,
  Modal,
  Pagination,
  Progress,
  Col,
  Row,
} from 'antd';
import {
  ArrowDownOutlined, ArrowUpOutlined,
  EditOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  SmileOutlined
} from '@ant-design/icons';

const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;
const { Panel } = Collapse;

  const [isModalVisible, setIsModalVisible] = useState(false);
const showModal = () => {
    setIsModalVisible(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
const [gardensPerPage, setGardensPerPage] = useState(10);

 const mockData = {
  growingPlants: 50, // Mock data
  idlePlants: 20 // Mock data
};
const growthPercentage = (mockData.growingPlants / (mockData.growingPlants + mockData.idlePlants)) * 100;
const idlePercentage = (mockData.idlePlants / (mockData.growingPlants + mockData.idlePlants)) * 100;





   // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  

const handleModal = () => {
  setIsModalVisible(false);
};
  

  const columns = [
    {
      title: 'Garden Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <Tooltip title="Click for more info">
          <a>{text}</a>
        </Tooltip>
      ),
    },
    
   
  

    {
      title: 'Garden Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
       title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: tags => (
      <>
        {tags.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    ),

  


     
      
      render: (status) => (
        <Badge
          status={status === 'Active' ? 'success' : 'error'}
          text={status}
        />
      ),
    },
    {
      title: 'Actions',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" icon={<EditOutlined />} onClick={showModal}>
            Edit
          </Button>
          <Button type="danger" icon={<DeleteOutlined />}>
            Delete
          </Button>
          <Button type="default" icon={<InfoCircleOutlined />}>
            View Details
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
        key: '1',
    name: 'Rose Garden',
    type: 'Flowers',
    status: 'Active',
    tags: ['Spring', 'Outdoor'],
    },
    {
      key: '2',
      name: 'Herb Garden',
      type: 'Herbs',
      status: 'Inactive',
      tags: ['Summer', 'Indoor'],
    },
    // ... more data
  ];

    



 

  const GardenList = () => {
  return (
 
 <Row gutter={[16, 16]}>
      <Col span={6}>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Growth Percentage"
                value={growthPercentage}
                precision={2}
                valueStyle={{
                  color: '#3f8600',
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
              <p>Total Growing Plants: {mockData.growingPlants}</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Idle Percentage"
                value={idlePercentage}
                precision={2}
                valueStyle={{
                  color: '#cf1322',
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
              <p>Total Idle Plants: {mockData.idlePlants}</p>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={18}>

      <Search
        placeholder="Search Gardens"
        enterButton={<SearchOutlined />}
        size="large"
        style={{ marginBottom: '20px' }}
      />
      
 

      <Tabs defaultActiveKey="1">
        <TabPane tab="All Gardens" key="5">
          <Table  columns={columns} 
            dataSource={data}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ['10', '20', '30', '40'],
              showQuickJumper: true,
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            }}
          />

         
         <Pagination
  current={currentPage}
  total={data.length}  // Fixed here
  pageSize={gardensPerPage}
  onChange={handlePageChange}
/>

        expandable={{
              expandedRowRender: record => (
                <Collapse>
                  <Panel header="Activity Feed" key="4">
                    <Timeline>
                      <Timeline.Item>
                        Last watered 2 days ago
                        <div style={{ width: 100 }}>
                          <Progress percent={80} size="small" />
                        </div>
                      </Timeline.Item>
                      <Timeline.Item>
                        Fertilized 1 week ago
                        <div style={{ width: 100 }}>
                          <Progress percent={60} size="small" status="active" />
                        </div>
                      </Timeline.Item>
                      {/* Add more timeline items */}
                    </Timeline>
                    </Panel>
                    </Collapse>

          ),
            }}

   
          
        </TabPane>
        <TabPane tab="Fruits" key="2">
          {/* Content for Fruits tab */}
        </TabPane>
        <TabPane tab="Flowers" key="3">
          {/* Content for Flowers tab */}
        </TabPane>
        {/* ... more tabs */}
      </Tabs>
      <Button type="primary" onClick={showModal}>
            Quick Add
          </Button>

     <Modal
  title="Quick Add Garden"
  visible={isModalVisible}  // Fixed here
  onOk={handleOk}
  onCancel={handleCancel}
>

  
  
    <Timeline>
      <Timeline.Item color="green">
        Created garden on {record.creationDate}
      </Timeline.Item>
      <Timeline.Item color="green">
        Added new plants on {record.lastAddedPlants}
      </Timeline.Item>
      <Timeline.Item color="red">
        <p>Last watered on {record.lastWatered}</p>
        <p>Last fertilized on {record.lastFertilized}</p>
      </Timeline.Item>
      <Timeline.Item color="gray">
        Last pruned on {record.lastPruned}
      </Timeline.Item>
      <Timeline.Item color="#00CCFF" dot={<SmileOutlined />}>
        Received a high health score on {record.lastHealthCheck}
      </Timeline.Item>
    </Timeline>

  



        <Form>
          <Form.Item label="Garden Name" name="gardenName">
            <Input />
          </Form.Item>
          <Form.Item label="Garden Type" name="gardenType">
            <Select>
              <Option value="Fruits">Fruits</Option>
              <Option value="Flowers">Flowers</Option>
              {/* ... more options */}
            </Select>
          </Form.Item>
          {/* ... more form items */}
        </Form>
      </Modal>
  </Col>
    </Row>

    );
};




export default GardenList;

