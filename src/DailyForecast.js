import React, { useState } from 'react';
import axios from 'axios';
import WeatherDay from './WeatherDay';

import './DailyForecast.css';

export default function DailyForecast(props) {
	const [ready, setReady] = useState(false);
	const [forecastData, setForecastData] = useState(null);

	function handleSearch() {
		const apiKey = '7ced214993840d6e67dd8feafce2738d';
		const defaultCityLat = props.coordinates.lat;
		const defaultCityLon = props.coordinates.lon;
		const unit = 'imperial';
		const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${defaultCityLat}&lon=${defaultCityLon}&appid=${apiKey}&units=${unit}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleResponse(response) {
		setForecastData(response.data.daily);
		setReady(true);
	}

	if (ready) {
		return (
			<div className="Daily-Forecast">
				<div className="card p-0 border-0 rounded-5">
					<div className="card-header border-0 p-3 m-0 rounded-5 text-center">
						City Name Daily Forecast
					</div>
					<div className="row">
						<div className="col p-0 m-2 text-center week-temp">
							<WeatherDay data={forecastData[0]} />
						</div>
					</div>
					<div className="card-footer border-0 p-3 m-0 rounded-5 text-center">
						<button
							className="btn btn-secondary btn-lg rounded-5"
							type="submit"
						>
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
	} else {
		handleSearch();
		return null;
	}
}
