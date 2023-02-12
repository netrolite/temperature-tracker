import React from 'react';
import { useRef, useEffect } from 'react';

export default function TemperatureChart({ temperatureData }) {
  const canvasRef = useRef(null);
  const canvasWidth = useRef(200);
  const canvasHeight = useRef(150);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvasWidth.current;
    canvas.height = canvasHeight.current;
    const ctx = canvas.getContext('2d');
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}
