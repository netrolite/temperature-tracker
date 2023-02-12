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
      // console.log(time);
      // console.log(value);

      const timeOnScaleOf0To100 = findTimeOnScaleOf1To100(time);
      // console.log(timeOnScaleOf0To100);
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
  const minutesIn24Hours = 60 * 24;

  const splitTime = time.split(':');
  const hours = parseInt(splitTime[0]);
  const minutes = parseInt(splitTime[1]);
  const minutesInThisDay = hours * 60 + minutes;
  console.log(minutesInThisDay);
  const onScaleOf100 = (minutesInThisDay / minutesIn24Hours) * 100;
  console.log(onScaleOf100);
  if (onScaleOf100 > 100) throw new Error('Wrong time');
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
