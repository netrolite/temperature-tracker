import React from 'react';
import { useRef, useEffect, useState } from 'react';

export default function TemperatureChart({ day }) {
  const canvasRef = useRef(null);
  console.log(day, 'day');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    fitToContainer(canvas);

    ctx.strokeStyle = '#575757';
    ctx.moveTo(0, 30);
    ctx.lineTo(canvas.width, 30);
    ctx.stroke();

    ctx.font = "16px";
    const date = new Date();
    const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    ctx.fillText(formattedDate, 15, 20);
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

function fitToContainer(canvas) {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novermber",
  "December"
]