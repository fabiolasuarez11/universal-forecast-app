import React from 'react';

import './CurrentWeather.css';

export default function CurrentWeather(props) {
	return (
		<div className="Current-Weather">
			<div className="card p-0 border-0 rounded-5">
				<div className="card-header border-0 p-3 m-0 rounded-5 text-center">
					Wednesday 11:49, August 10, 2022
				</div>
				<div className="row">
					<div className="col col-md-6 m-0 p-0">
						<p className="main-today ps-5 pt-4">{props.data.city}</p>
						<p className="main-today ps-5">
							<strong className="m-0">{props.data.temperature}</strong>
							<strong>°F</strong>
						</p>
						<p className="main-today ps-5  pt-4">
							Last updated:{' '}
							<span className="m-0" id="date">
								{/* {props.data.date} */}
							</span>
						</p>
						<p
							className="main-today ps-5  pt-4 text-capitalize"
							id="description"
						>
							{props.data.description}
						</p>
						<img
							src={`https://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
							alt={props.data.description}
							id="icon"
							className="ps-5 w-80"
						/>
					</div>
					<div className="col col-md-6 m-0 pt-4">
						<p className="main-today ps-3  pt-4">
							Max <span className="m-0 ms-1">{props.data.maxTemp}</span>° • Min{' '}
							<span className="m-0 ms-1">{props.data.minTemp}</span>°
						</p>
						<p className="main-today ps-3 pt-4">
							Humidity:
							<span className="m-0 ms-3">{props.data.humidity}</span> %
							<i className="fa-solid fa-droplet m-0 p-2"></i>
						</p>
						<p className="main-today ps-3 pt-4">
							Wind:
							<span className="m-0 ms-3">{props.data.wind}</span> mph
							<i className="fa-solid fa-wind m-0 p-2"></i>
						</p>
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
