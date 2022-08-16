import React from 'react';
import './DailyForecast.css';

export default function DailyForecast() {
	return (
		<div className="Daily-Forecast">
			<div className="card p-0 border-0 rounded-5">
				<div className="card-header border-0 p-3 m-0 rounded-5 text-center">
					City Name Daily Forecast
				</div>
				<div id="forecast">
					<div className="row">
						<div className="col p-0 text-center week-temp">Weekday</div>
						<div className="col p-0 text-center week-temp">Weekday</div>
						<div className="col p-0 text-center week-temp">Weekday</div>
						<div className="col p-0 text-center week-temp">Weekday</div>
						<div className="col p-0 text-center week-temp">Weekday</div>
						<div className="col p-0 text-center week-temp">Weekday</div>
					</div>
					<div className="row">
						<div className="col m-0 ps-4 align-self-center week-temp">
							<img
								src="https://openweathermap.org/img/wn/01d@2x.png"
								alt="Weather condition"
								width="60"
							/>
						</div>
						<div className="col m-0 ps-4 align-self-center week-temp">
							<img
								src="https://openweathermap.org/img/wn/01d@2x.png"
								alt="Weather condition"
								width="60"
							/>
						</div>
						<div className="col m-0 ps-4 align-self-center week-temp">
							<img
								src="https://openweathermap.org/img/wn/01d@2x.png"
								alt="Weather condition"
								width="60"
							/>
						</div>
						<div className="col m-0 ps-4 align-self-center week-temp">
							<img
								src="https://openweathermap.org/img/wn/01d@2x.png"
								alt="Weather condition"
								width="60"
							/>
						</div>
						<div className="col m-0 ps-4 align-self-center week-temp">
							<img
								src="https://openweathermap.org/img/wn/01d@2x.png"
								alt="Weather condition"
								width="60"
							/>
						</div>
						<div className="col m-0 ps-4 align-self-center week-temp">
							<img
								src="https://openweathermap.org/img/wn/01d@2x.png"
								alt="Weather condition"
								width="60"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col text-center week-temp">
							<span className="m-0 ms-1">0°</span> -{' '}
							<span className="m-0 ms-1">0°</span>
						</div>
						<div className="col text-center week-temp">
							<span className="m-0 ms-1">0°</span> -{' '}
							<span className="m-0 ms-1">0°</span>
						</div>
						<div className="col text-center week-temp">
							<span className="m-0 ms-1">0°</span> -{' '}
							<span className="m-0 ms-1">0°</span>
						</div>
						<div className="col text-center week-temp">
							<span className="m-0 ms-1">0°</span> -{' '}
							<span className="m-0 ms-1">0°</span>
						</div>
						<div className="col text-center week-temp">
							<span className="m-0 ms-1">0°</span> -{' '}
							<span className="m-0 ms-1">0°</span>
						</div>
						<div className="col text-center week-temp">
							<span className="m-0 ms-1">0°</span> -{' '}
							<span className="m-0 ms-1">0°</span>
						</div>
					</div>
					<div className="row">
						<div className="col m-0 p-0 w-100 text-center week-temp">
							<span className="m-0 ms-1">0</span>%
							<i className="fa-solid fa-droplet m-1 p-1"></i>
						</div>
						<div className="col m-0 p-0 w-100 text-center week-temp">
							<span className="m-0 ms-1">0</span>%
							<i className="fa-solid fa-droplet m-1 p-1"></i>
						</div>
						<div className="col m-0 p-0 w-100 text-center week-temp">
							<span className="m-0 ms-1">0</span>%
							<i className="fa-solid fa-droplet m-1 p-1"></i>
						</div>
						<div className="col m-0 p-0 w-100 text-center week-temp">
							<span className="m-0 ms-1">0</span>%
							<i className="fa-solid fa-droplet m-1 p-1"></i>
						</div>
						<div className="col m-0 p-0 w-100 text-center week-temp">
							<span className="m-0 ms-1">0</span>%
							<i className="fa-solid fa-droplet m-1 p-1"></i>
						</div>
						<div className="col m-0 p-0 w-100 text-center week-temp">
							<span className="m-0 ms-1">0</span>%
							<i className="fa-solid fa-droplet m-1 p-1"></i>
						</div>
					</div>
				</div>
				<div className="card-footer border-0 p-3 m-0 rounded-5 text-center">
					<button className="btn btn-secondary btn-lg rounded-5" type="submit">
						<a
							href="https://weather.com/"
							target="_blank"
							rel="noreferrer"
							className="more-dates"
						>
							More Dates
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}
