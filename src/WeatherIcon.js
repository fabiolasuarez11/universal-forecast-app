import React from 'react';

export default function WeatherIcon(props) {
	const mapCode = {
		'01d': 'public/images/clear-day.svg',
		'01n': 'public/images/clear-night.svg',
		'02d': 'public/images/partly-cloudy-day.svg',
		'02n': 'public/images/partly-cloudy-night.svg',
		'03d': 'public/images/overcast.svg',
		'03n': 'public/images/overcast.svg',
		'04d': 'public/images/overcast-day.svg',
		'04n': 'public/images/overcast-night.svg',
		'09d': 'public/images/overcast-day-drizzle.svg',
		'09n': 'public/images/overcast-night-drizzle.svg',
		'10d': 'public/images/overcast-day-rain.svg',
		'10n': 'public/images/overcast-night-rain.svg',
		'11d': 'public/images/thunderstorms-day-overcast-rain.svg',
		'11n': 'public/images/thunderstorms-night-extreme-rain.svg',
		'13d': 'public/images/overcast-day-snow.svg',
		'13n': 'public/images/overcast-night-snow.svg',
		'50d': 'public/images/overcast-day-fog.svg',
		'50n': 'public/images/overcast-night-fog.svg',
	};

	return <img src={mapCode[props.iconWeather]} />;
}
