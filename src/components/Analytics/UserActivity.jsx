import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {name: 'Jan', uv: 4000/60, pv: 2400/60, amt: 2400},
  {name: 'Feb', uv: 3000/60, pv: 1398/60, amt: 2210},
  {name: 'Mar', uv: 2000/60, pv: 9800/60, amt: 2290},
  {name: 'Apr', uv: 2780/60, pv: 3908/60, amt: 2000},
  {name: 'May', uv: 1890/60, pv: 4800/60, amt: 2181},
  {name: 'Jun', uv: 2390/60, pv: 3800/60, amt: 2500},
  {name: 'Jul', uv: 3490/60, pv: 4300/60, amt: 2100},
];

const UserActivity = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} fill="transparent" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" fill="transparent" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default UserActivity;
