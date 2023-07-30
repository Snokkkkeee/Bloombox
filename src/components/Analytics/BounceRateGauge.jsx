import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const BounceRateGauge = ({ percent }) => {
  const data = [
    { value: percent },
    { value: 1 - percent },
  ];
  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          innerRadius="70%"
          outerRadius="80%"
          startAngle={180}
          endAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default BounceRateGauge;
