import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Typography, Row, Col, Space } from "antd";
import { GiWaterDrop } from "react-icons/gi"; // Import a more visually appealing icon

const { Title} = Typography;

export default function WaterLevelGauge() {
  const [percent, setPercent] = useState(75);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prevPercent) => (prevPercent >= 100 ? 75 : prevPercent + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const data = [{ value: percent }, { value: 100 - percent }];

  const COLORS = ["rgb(5, 205, 153)", "#3d2873"];

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
        color: "#7EF9E0",
      }}
    >
      <Title level={3} style={{ color: "white", fontWeight: "bold" }}>
        <GiWaterDrop style={{ marginRight: "10px", color: "#1890ff" }} />{" "}
        {/* Add your icon here */}
        Reservoir Water Level
      </Title>
      <Row gutter={16}>
        <Col span={24}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "250px",
              padding: "5px",
              borderRadius: "5px",
              width: "100%",
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius="60%"
                  outerRadius="90%"
                  fill="#8884d8"
                  paddingAngle={5}
                  startAngle={180}
                  endAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div
              style={{
                position: "absolute",
                fontSize: "2.5rem",
                color: "rgb(126, 249, 224)",
                lineHeight: "21px",
                fontFamily: "Roboto",
                fontWeight: "400",
                letterSpacing: "-0.004em",
              }}
            >{`${percent}%`}</div>
          </div>
          <div
            style={{
              fontSize: "1.2em",
              lineHeight: "normal",
              fontWeight: "300",
              letterSpacing: "0.131em",
              fontFamily: "Roboto",
            }}
          >
            The current water level is at {percent}% of the reservoir's total
            capacity.
          </div>
        </Col>
      </Row>
    </Space>
  );
}
