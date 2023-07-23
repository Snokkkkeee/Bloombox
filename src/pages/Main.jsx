import React from "react";
import { Typography, List, Card } from "antd";

const { Title } = Typography;

function Main() {
  // Replace with actual data
  const data = [
    {
      title: "Plant 1",
      description: "This is a description of Plant 1.",
      // Add more plant details as needed
    },
    {
      title: "Plant 2",
      description: "This is a description of Plant 2.",
      // Add more plant details as needed
    },
    // Add more plants as needed
  ];

  return (
    <div>
      <Title level={2}>Your Plants</Title>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>
              <p>{item.description}</p>
              {/* Add more plant details as needed */}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Main;
