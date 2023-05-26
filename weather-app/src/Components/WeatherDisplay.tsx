import React, {useState} from "react";

// Initial goal to render:
// Name of city, temp, humidity, sunrise and sunset, description (clouds)
// type WeatherProps = {
//   name: string;
//   temp: number | string;
//   humidity: number | string;
//   description: string;
// };



	


	// function to fetch weather info
	async function GetWeather() {
		const [name, setName] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [temp, setTemp] = useState<number | string>();
	const [humidity, setHumidity] = useState<number | string>();
		// await fetch(
		// 	'https://api.openweathermap.org/data/2.5/weather?q=London&appid=9426d32b582da23208df385085a515cd'
		// )
		// 	.then(response => response.json())
		// 	.then(data => console.log(data));
		const response = await fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=London&appid=9426d32b582da23208df385085a515cd'
		);
		const data = await response.json();
		console.log(data);
		setName(data.name);
		// console.log(name);
		setDescription(data.weather[0].description);
		// console.log(description);

		// API gets weather in kelvin, we convert to celsius
		setTemp(Math.round(data.main.temp - 273.15));
		// console.log(temp);
		setHumidity(data.main.humidity);

  return (
	<>
    <div className="weather">
		
      <h2>Weather in {name}</h2>
      <p>{temp}C</p>
      <p>{humidity}%</p>
      <p>{description}</p>
    </div>
	</>
  );
};


export default GetWeather;
