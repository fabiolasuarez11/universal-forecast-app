import React from 'react';
import './CurrentWeather.css';

export default function CurrentWeather() {
	return (
		<div className="Current-Weather">
			<div className="card p-0 border-0 rounded-5">
				<div className="card-header border-0 p-3 m-0 rounded-5 text-center">
					Wednesday 11:49, August 10, 2022
				</div>
				<div className="row">
					<div className="col col-md-6 m-0 p-0">
						<p className="main-today ps-5 pt-4">City Name</p>
						<p className="main-today ps-5">
							<strong className="m-0">0</strong>
							<strong>°F</strong>
						</p>
						<p className="main-today ps-5  pt-4">
							Last updated:{' '}
							<span className="m-0" id="date">
								Date
							</span>
						</p>
						<p className="main-today ps-5  pt-4" id="description">
							Weather Condition
						</p>
						<img
							src="https://openweathermap.org/img/wn/01d@2x.png"
							alt="Weather condition"
							id="icon"
							className="ps-5 w-80"
						/>
					</div>
					<div className="col col-md-6 m-0 pt-4">
						<p className="main-today ps-3  pt-4">
							Max <span className="m-0 ms-1">0</span>° • Min{' '}
							<span className="m-0 ms-1">0</span>°
						</p>
						<p className="main-today ps-3 pt-4">
							Humidity:
							<span className="m-0 ms-3">0</span> %
							<i className="fa-solid fa-droplet m-0 p-2"></i>
						</p>
						<p className="main-today ps-3 pt-4">
							Wind:
							<span className="m-0 ms-3">0</span> mph
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
