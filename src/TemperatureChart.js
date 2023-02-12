import { useRef } from 'react';

export default function TemperatureChart({ temperatureData }) {
  const canvasRef = useRef(null);
  console.log(canvasRef);

  return <canvas ref={canvasRef}></canvas>;
}
