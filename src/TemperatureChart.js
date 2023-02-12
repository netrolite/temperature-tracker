import React from 'react';
import { useRef, useEffect, useState } from 'react';

export default function TemperatureChart({ day }) {
  const canvasRef = useRef(null);
  console.log(day, 'day');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    fitToContainer(canvas);

    ctx.strokeStyle = 'darkgray';
    ctx.moveTo(0, 30);
    ctx.lineTo(canvas.width, 30);
    ctx.stroke();
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

function fitToContainer(canvas) {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
