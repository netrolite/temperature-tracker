import React from 'react';
import { useRef, useEffect, useState } from 'react';

const barWidth = 20;

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

      const barX = findBarX(time, canvas);
      const barY = findBarY(value, canvas);
      console.log(barX, barY);
    });
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

function findBarX(time, canvas) {
  const minutesIn24Hours = 60 * 24;
  const canvasWidth = canvas.width;

  const splitTime = time.split(':');
  const hours = parseInt(splitTime[0]);
  const minutes = parseInt(splitTime[1]);
  const minutesInThisDay = hours * 60 + minutes;
  const onScaleOf100 = (minutesInThisDay / minutesIn24Hours) * 100;
  if (onScaleOf100 > 100) throw new Error('Wrong time. Over 24 hours');

  const multiplicand = onScaleOf100 / 100;
  const onScaleOfCanvasWidth = (canvasWidth - barWidth) * multiplicand;
  return onScaleOfCanvasWidth;
}

function findBarY(temperature, canvas) {
  const canvasHeight = canvas.height;
  const min = 35;
  const max = 42;
  const range = 42 - 35;

  if (temperature < min || temperature > max) {
    throw new RangeError('Temperature out of range');
  }

  const diff = max - temperature;
  const height = range - diff;
  const heightOnScaleOf100 = (height / range) * 100;
  const multiplicand = heightOnScaleOf100 / 100;
  const onScaleOfCanvasHeight = canvasHeight * multiplicand;
  return onScaleOfCanvasHeight;
}

function fitToContainer(canvas) {
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
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
