import React from 'react';
import './style.css';
import data from './data.js';

export default function App() {
  data.forEach((item) => {
    const localizedDate = item.date.toLocaleDateString();
    const localizedTime = item.date.toLocaleTimeString();
    console.log(localizedDate);
    console.log(localizedTime);
  });

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
