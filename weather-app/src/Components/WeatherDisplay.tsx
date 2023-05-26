import React from 'react';
import './App.css';
type WeatherProps = {
  name: string;
  description: string;
  temp: number;
  humidity: number;
};
const WeatherDisplay: React.FC<WeatherProps> = ({
  name,
  description,
  temp,
  humidity,
}) => {
  return (
    <div className='container'>
      <div className='weather'>
        <h2>Weather in {name}</h2>
        <p>Description: {description}</p>
        <p>Temperature: {temp}C</p>
        <p>Humidity: {humidity}%</p>
      </div>
    </div>
  );
};
export default WeatherDisplay;