import React from 'react';
import { useRef, useEffect, useState } from 'react';

export default function TemperatureChart({ day }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    fitToContainer(canvas);

    ctx.strokeStyle = '#575757';
    ctx.moveTo(0, 30);
    ctx.lineTo(canvas.width, 30);
    ctx.stroke();

    const date = day.date;
    const formattedDate = `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
    ctx.font = '15px Roboto';
    ctx.fillText(formattedDate, 15, 20);

    const temperatures = day.temperatures;

    temperatures.forEach((temperature) => {
      const time = temperature.time;
      const value = temperature.value;
      console.log(time);
      console.log(value);

      const timeOnScaleOf0To100 = findTimeOnScaleOf1To100(time);
    });
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

function fitToContainer(canvas) {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function findTimeOnScaleOf1To100(time) {
  const minutesInADay = 60 * 24;
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'Novermber',
  'December',
];
