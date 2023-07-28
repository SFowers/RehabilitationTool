import logo from './logo.svg';
import './App.css';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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

function MyChart() {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8">
    </LineChart>
  )
}

export default App;
