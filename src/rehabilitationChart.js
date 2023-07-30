import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RehabilitationChart = ({ patientData, normativeData }) => {
  return (
    <LineChart width={800} height={400} data={patientData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="dateTime" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* Each exercise type will have a unique color */}
      <Line type="monotone" dataKey="handWaves" stroke="#8884d8" name="Hand Waves" />
      <Line type="monotone" dataKey="acrossTable" stroke="#82ca9d" name="Across Table" />
      <Line type="monotone" dataKey="raiseArm" stroke="#ffc658" name="Raise Arm" />
      {/* Add a line for normative data */}
      <Line type="monotone" dataKey="normative" stroke="#000000" name="Normative" />
    </LineChart>
  );
};

export default RehabilitationChart;