import logo from './logo.svg';
import './App.css';
import React from 'react';
// eslint-disable-next-line
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import RehabilitationChart from './rehabilitationChart';

// eslint-disable-next-line
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// eslint-disable-next-line
const MainApp = () => {
  // Sample exercise data
  const exerciseData = [
    {
      name: "handWaves",
      data: [
        { timeDate: new Date(2023, 6, 30, 10, 0, 0, 0), reps: 5 },
        { timeDate: new Date(2023, 6, 31, 11, 0, 0, 0), reps: 7 },
        { timeDate: new Date(2023, 7, 1, 12, 0, 0, 0), reps: 10 },
      ],
    },
    {
      name: "acrossTable",
      data: [
        { timeDate: new Date(2023, 6, 30, 10, 0, 0, 0), reps: 3 },
        { timeDate: new Date(2023, 6, 31, 11, 0, 0, 0), reps: 6 },
        { timeDate: new Date(2023, 7, 1, 12, 0, 0, 0), reps: 8 },
      ],
    },
    {
      name: "raiseArm",
      data: [
        { timeDate: new Date(2023, 6, 30, 10, 0, 0, 0), reps: 8 },
        { timeDate: new Date(2023, 6, 31, 11, 0, 0, 0), reps: 9 },
        { timeDate: new Date(2023, 7, 1, 12, 0, 0, 0), reps: 12 },
      ],
    },
  ];

  // Sample normative data
  const normativeData = [
    { dateTime: new Date(2023, 6, 30, 0, 0, 0, 0), normative: 6 },
    { dateTime: new Date(2023, 6, 31, 0, 0, 0, 0), normative: 7 },
    { dateTime: new Date(2023, 7, 1, 0, 0, 0, 0), normative: 9 },
  ];

  return (
    <div>
      <h1>Rehabilitation Tool</h1>
      <RehabilitationChart exerciseData={exerciseData} normativeData={normativeData} />
    </div>
  );
};

export default MainApp;