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
      {canvas}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
