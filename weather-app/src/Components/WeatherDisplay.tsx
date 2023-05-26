import React from 'react';

// Initial goal to render:
// Name of city, temp, humidity, sunrise and sunset, description (clouds)
type WeatherProps = {
	name: string;
	temp: number;
	humidity: number;
	description: string;
};
const WeatherDisplay: React.FC = () => {
	return (
		<div className='weather'>
			<h2>Weather in {city}</h2>
			<p></p>
		</div>
	);
};

export default WeatherDisplay;
