import React from 'react';
import WeatherIcon from './WeatherIcon';

export default function WeatherDay(props) {
	function date() {
		const weekDays = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		const date = new Date(props.data.dt * 1000);
		const currentDate = weekDays[date.getDay()];
		return currentDate;
	}

	const icon = props.data.weather[0].icon;
	const maxTemp = Math.round(props.data.temp.max);
	const minTemp = Math.round(props.data.temp.min);
	const humidity = props.data.humidity;

	return (
		<React.Fragment>
			<h5>{date()}</h5>
			<div className="align-self-center week-temp">
				<WeatherIcon icon={icon} size={60} width={70} />
			</div>
			<div className="text-center week-temp">
				<span className="m-0 ms-1">{maxTemp}°</span> -{' '}
				<span className="m-0 ms-1">{minTemp}°</span>
			</div>
			<div className="m-0 p-0 text-center week-temp">
				<span className="m-0 ms-1">{humidity}</span>%
				<i className="fa-solid fa-droplet m-1 p-1"></i>
			</div>
		</React.Fragment>
	);
}
