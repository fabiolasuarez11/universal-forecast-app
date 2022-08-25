import React from 'react';
import axios from 'axios';
import WeatherIcon from './WeatherIcon';

import './DailyForecast.css';

export default function DailyForecast(props) {
	const apiKey = '7ced214993840d6e67dd8feafce2738d';
	const defaultCityLat = props.coordinates.lat;
	const defaultCityLon = props.coordinates.lon;
	const unit = 'imperial';
	const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${defaultCityLat}&lon=${defaultCityLon}&appid=${apiKey}&units=${unit}`;
	axios.get(apiUrl).then(handleResponse);

	function handleResponse(response) {
		console.log(response);
	}

	return (
		<div className="Daily-Forecast">
			<div className="card p-0 border-0 rounded-5">
				<div className="card-header border-0 p-3 m-0 rounded-5 text-center">
					City Name Daily Forecast
				</div>
				<div className="row">
					<div className="col p-0 m-2 text-center week-temp">
						<h5>Weekday</h5>
						<div className="align-self-center week-temp">
							<WeatherIcon icon="01d" size={60} width={60} />
						</div>
						<div className="text-center week-temp">
							<span className="m-0 ms-1">0°</span> -{' '}
							<span className="m-0 ms-1">0°</span>
						</div>
						<div className="m-0 p-0 text-center week-temp">
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
