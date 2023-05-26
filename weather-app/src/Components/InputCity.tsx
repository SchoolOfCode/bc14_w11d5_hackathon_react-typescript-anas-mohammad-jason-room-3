import React, { useState } from "react";
// import moment from 'moment';
// import GetWeather from './WeatherDisplay';
import WeatherDisplay from "./WeatherDisplay";
const InputCity = () => {
  // Initial goal to render:
  // Name of city, temp, humidity, sunrise and sunset, description (clouds)
  const [city, setCity] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [temp, setTemp] = useState<number>(0);
  const [humidity, setHumidity] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  // const [sunrise, setSunrise] = useState<string>();
  // const [sunset, setSunset] = useState<string>();
  // function to fetch weather info
  async function getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9426d32b582da23208df385085a515cd`
    );
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      setName(data.name);
      console.log(name);
      setDescription(data.weather[0].description);
      setTemp(Math.round(data.main.temp - 273.15));
      console.log(temp);
      setHumidity(data.main.humidity);
      console.log(humidity);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    setClicked(true);
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter city"
        onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
          setCity(e.currentTarget.value);
          console.log(city);
        }}
      />
      <button onClick={getWeather}>Submit</button>
      {success === true && clicked === true ? (
        <WeatherDisplay
          name={name}
          description={description}
          temp={temp}
          humidity={humidity}
        />
      ) : success === false && clicked === true ? (
        <p>City not found</p>
      ) : ""
	}
    </>
  );
};
export default InputCity;
