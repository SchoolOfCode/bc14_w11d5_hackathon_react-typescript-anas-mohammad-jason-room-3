import React, { useState } from 'react';
import moment from 'moment';
import GetWeather from './WeatherDisplay';

const InputCity: React.FC = () => {
	// Initial goal to render:
	// Name of city, temp, humidity, sunrise and sunset, description (clouds)
	const [city, setCity] = useState<string>('');
	// const [name, setName] = useState<string>('');
	// const [description, setDescription] = useState<string>('');
	// const [temp, setTemp] = useState<number | string>();
	// const [humidity, setHumidity] = useState<number | string>();
	// const [sunrise, setSunrise] = useState<string>();
	// const [sunset, setSunset] = useState<string>();

	// function to fetch weather info
	// async function getWeather() {
		// await fetch(
		// 	'https://api.openweathermap.org/data/2.5/weather?q=London&appid=9426d32b582da23208df385085a515cd'
		// )
		// 	.then(response => response.json())
		// 	.then(data => console.log(data));
		// const response = await fetch(
		// 	'https://api.openweathermap.org/data/2.5/weather?q=London&appid=9426d32b582da23208df385085a515cd'
		// );
		// const data = await response.json();
		// console.log(data);
		// setName(data.name);
		// // console.log(name);
		// setDescription(data.weather[0].description);
		// // console.log(description);

		// // API gets weather in kelvin, we convert to celsius
		// setTemp(Math.round(data.main.temp - 273.15));
		// // console.log(temp);
		// setHumidity(data.main.humidity);
		// console.log(humidity);

		// use moment package to format sunrise & sunset
		// const timezone = data.timezone;
		// setSunrise(moment(data.sys.sunrise).format('LT'));
		// console.log(sunrise);
		// setSunset(moment(data.sys.sunset).format('LT'));
		// console.log(sunset);

		// .format('MMM Do YYYY, h:mm:ss a');
		// Output: "May 24th 2023, 9:15:09 pm"
	// }
	return (
		<>
			<input
				type='text'
				placeholder='Enter city'
				onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
					setCity(e.currentTarget.value);
					console.log(city);
				}}
			/>
			<button onClick={GetWeather}>Submit</button>
			
				
		</>
	);
};

export default InputCity;
