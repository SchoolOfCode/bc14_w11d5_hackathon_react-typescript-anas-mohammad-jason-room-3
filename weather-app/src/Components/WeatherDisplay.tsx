import React from "react";
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
    <>
      <div className="weather">
        <h2>Weather in {name}</h2>
        <p>{description}</p>
        <p>{temp}C</p>
        <p>{humidity}%</p>
      </div>
    </>
  );
};
export default WeatherDisplay;
