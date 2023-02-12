import React from 'react';
import './style.css';
import data from './data.js';
import TemperatureChart from './TemperatureChart';

export default function App() {
  const canvas = data.map((temperatureData, i) => {
    return <TemperatureChart temperatureData={temperatureData} key={i} />;
  });
  
  return (
    <div>
      <h1>hello</h1>
      {canvas}
    </div>
  );
}
