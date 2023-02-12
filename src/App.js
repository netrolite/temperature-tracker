import React from 'react';
import './style.css';
import data from './data.js';
import TemperatureChart from './TemperatureChart';

export default function App() {
  const canvasNodes = data.map((day, i) => {
    return <TemperatureChart day={day} />;
  });

  return (
    <div>
      <h1>hello</h1>
      {canvasNodes}
    </div>
  );
}
