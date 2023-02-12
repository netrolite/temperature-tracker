import React from 'react';
import { useRef, useEffect, useState } from 'react';

export default function TemperatureChart({ temperatureData }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    fitToContainer(canvas);
    
    
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

function fitToContainer(canvas) {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
