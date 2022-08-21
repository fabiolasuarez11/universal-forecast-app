import React from 'react';
import {
	WiDaySunny,
	WiDayCloudy,
	WiCloud,
	WiCloudy,
	WiDayShowers,
	WiDayRain,
	WiDayThunderstorm,
	WiDaySnow,
	WiDayFog,
	WiNightClear,
	WiNightAltCloudy,
	WiNightAltShowers,
	WiNightAltRain,
	WiNightAltThunderstorm,
	WiNightAltSnow,
	WiNightFog,
} from 'react-icons/wi';

export default function WeatherIcon(props) {
	const mapCode = {
		'01d': WiDaySunny,
		'01n': WiNightClear,
		'02d': WiDayCloudy,
		'02n': WiNightAltCloudy,
		'03d': WiCloud,
		'03n': WiCloud,
		'04d': WiCloudy,
		'04n': WiCloudy,
		'09d': WiDayShowers,
		'09n': WiNightAltShowers,
		'10d': WiDayRain,
		'10n': WiNightAltRain,
		'11d': WiDayThunderstorm,
		'11n': WiNightAltThunderstorm,
		'13d': WiDaySnow,
		'13n': WiNightAltSnow,
		'50d': WiDayFog,
		'50n': WiNightFog,
	};

	return (
		<span
			className={mapCode[props.code]}
			color={props.color}
			size={props.size}
		></span>
	);
}
