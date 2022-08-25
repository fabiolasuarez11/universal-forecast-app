import React from 'react';
import FormatDateCard from './FormatDateCard';
import FormatDate from './FormatDate';
import WeatherIcon from './WeatherIcon';
import Temperature from './Temperature';

import './CurrentWeather.css';
// import MaxMinTemperature from './MaxMinTemperature';

export default function CurrentWeather(props) {
	return (
		<div className="CurrentWeather">
			<div className="card p-0 border-0 rounded-5">
				<div className="card-header border-0 p-3 m-0 rounded-5 text-center">
					<FormatDateCard date={props.data.date} />
				</div>
				<div className="row">
					<div className="col col-md-6 m-0 p-0">
						<p className="main-today pt-4 text-center">{props.data.city}</p>
						<p className="main-today text-center">
							<Temperature fahrenheit={props.data.temperature} />
						</p>
						<p className="main-today pt-4 text-center">Last updated:</p>
						<FormatDate date={props.data.date} />
						<p className="main-today pt-5 text-capitalize text-center">
							{props.data.description}
						</p>
					</div>
					<div className="col col-md-6 m-0 p-0">
						<p className="main-today pt-4">
							{/* <MaxMinTemperature
								fahrenheit={props.data.temperature}
								maxTemp={props.data.maxTemp}
								minTemp={props.data.minTemp}
							/> */}
							Max <span className="m-0 ms-1">{props.data.maxTemp}</span>°{' '}
							<i className="fa-solid fa-temperature-full m-1"></i> • Min{' '}
							<span className="m-0 ms-1">{props.data.minTemp}</span>°{' '}
							<i className="fa-solid fa-temperature-empty m-1"></i>
						</p>
						<p className="main-today pt-4">
							Humidity:
							<span className="m-0 ms-3">{props.data.humidity}</span> %
							<i className="fa-solid fa-droplet m-0 p-2"></i>
						</p>
						<p className="main-today pt-4">
							Wind:
							<span className="m-0 ms-3">{props.data.wind}</span> mph
							<i className="fa-solid fa-wind m-0 p-2"></i>
						</p>
						<WeatherIcon
							icon={props.data.icon}
							alt={props.data.description}
							size={100}
							width={80}
						/>
					</div>
				</div>
				<div className="card-footer border-0 p-3 m-0 rounded-5 text-center">
					<a
						href="https://weather.com/"
						target="_blank"
						rel="noreferrer"
						className="alerts"
					>
						Weather Alerts!
					</a>
				</div>
			</div>
		</div>
	);
}
