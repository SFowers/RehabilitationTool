import logo from './logo.svg';
import './App.css';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import RehabilitationChart from './rehabilitationChart';

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

const App = () => {
  // Sample patient data (replace this with actual patient data)
  const patientData = [
    { dateTime: '2023-07-01', handWaves: 5, acrossTable: 8, raiseArm: 10 },
    { dateTime: '2023-07-02', handWaves: 7, acrossTable: 9, raiseArm: 12 },
    // Add more data points for each patient...
  ];

  // Sample normative data (replace this with actual normative data)
  const normativeData = [
    { dateTime: '2023-07-01', normative: 6 },
    { dateTime: '2023-07-02', normative: 8 },
    // Add more data points for each exercise type...
  ];

  return (
    <div>
      <h1>Rehabilitation Tool</h1>
      <rehabilitationChart patientData={patientData} normativeData={normativeData} />
    </div>
  );
};

export default App;