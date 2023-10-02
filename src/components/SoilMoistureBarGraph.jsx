import React from "react";
import { Bar } from "@ant-design/plots";
import { Typography, Space } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default function SoilMoistureBarGraph () {
	const data = [
		{ moisture: "Plant-1", value: 50 },
		{ moisture: "Plant-2", value: 61 },
		{ moisture: "Plant-3", value: 100 },
		{ moisture: "Plant-4", value: 20 },
	];

	const config = {
		data,
		xField: "value",
		yField: "moisture",
		seriesField: "moisture",
		legend: {
		position: "top-left",
		textStyle: {
			fill: "white",
 },
		},
		theme: {
 colors10: ["#007BFF", "#6630ff", "#28a745", "#e83e8c"], // Vibrant Blue, Vibrant Purple, Vibrant Green, Vibrant Red
		},
		colorField: "moisture",
		barStyle: {
 radius: [20, 20, 0, 0],
 fillOpacity: 0.8,
		},
		tooltip: {
 title: "Plant",
 showMarkers: false,
 shared: true,
 showCrosshairs: true,
 crosshairs: {
			type: "y",
 },
		},
		xAxis: {
 label: {
			style: {
 fill: "white",
			},
  },
		},
		yAxis: {
  label: {
			style: {
  fill: "white",
			},
  },
		},
 };
	
 return (
		<Space
  direction="vertical"
  size="middle"
  style={{ width: "100%", height: "100%" }}
		>
 <Title level={4} style={{ color: "white", fontWeight: "bold" }}>
			<EnvironmentOutlined /> Soil Moisture
	</Title>
 <Bar {...config} />
		</Space>
 );
	}
	