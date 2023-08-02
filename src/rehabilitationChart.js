import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const RehabilitationChart = ({ exerciseData, normativeData }) => {
  return (
    <LineChart width={800} height={400}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timeDate" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* Render lines for each exercise type */}
      {exerciseData.map((exercise, index) => (
        <Line
          key={index}
          data={exercise.data}
          type="monotone"
          dataKey="reps"
          stroke={getLineColor(exercise.name)}
          name={exercise.name}
        />
      ))}
      {/* Add a line for normative data */}
      <Line
        type="monotone"
        data={normativeData}
        dataKey="normative"
        stroke="#000000"
        name="Normative"
      />
    </LineChart>
  );
};

export default RehabilitationChart;

// Helper function to get the line color for each exercise
function getLineColor(exerciseName) {
  // Colors can be customized based on exerciseName if needed
  // For simplicity, this function returns a fixed color for each exercise
  switch (exerciseName) {
    case "handWaves":
      return "#8884d8";
    case "acrossTable":
      return "#82ca9d";
    case "raiseArm":
      return "#ffc658";
    default:
      return "#000000";
  }
}
