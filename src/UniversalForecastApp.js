import React, { useState } from 'react';
import axios from 'axios';
import CurrentWeather from './CurrentWeather';
import DailyForecast from './DailyForecast';
import Footer from './Footer';

import './UniversalForecastApp.css';

export default function UniversalForecastApp(props) {
	const [city, setCity] = useState(props.defaultCity);
	const [weatherData, setWeatherData] = useState({ ready: false });

	function handleSubmit(event) {
		event.preventDefault();
		handleSearch();
	}

	function handleResponse(response) {
		setWeatherData({
			ready: true,
			city: response.data.name,
			date: new Date(response.data.dt * 1000),
			coordinates: response.data.coord,
			temperature: Math.round(response.data.main.temp),
			maxTemp: Math.round(response.data.main.temp_max),
			minTemp: Math.round(response.data.main.temp_min),
			description: response.data.weather[0].description,
			icon: response.data.weather[0].icon,
			humidity: response.data.main.humidity,
			wind: Math.round(response.data.wind.speed),
		});
	}

	function handleSearch() {
		const apiKey = '7ced214993840d6e67dd8feafce2738d';
		const unit = 'imperial';
		const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleCity(event) {
		setCity(event.target.value);
	}

	function handleCurrentLocation(event) {
		setCity(event.target.value);
		function handlePosition(position) {
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;
			const apiKey = '7ced214993840d6e67dd8feafce2738d';
			const unit = 'imperial';
			const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
			axios.get(apiUrl).then(handleResponse);
		}
		navigator.geolocation.getCurrentPosition(handlePosition);
	}

	if (weatherData.ready) {
		return (
			<div className="UniversalForecastApp">
				<div className="container-fluid py-4 mb-4 rounded-5 main-header">
					<h1 className="display-5 fw-bold text-center main-header">
						<span role="img" aria-label="world-emoji">
							🌎
						</span>
						Universal Forecast
						<span role="img" aria-label="world-emoji">
							🌍
						</span>
					</h1>
					<form className="d-flex" role="search" onSubmit={handleSubmit}>
						<input
							className="form-control"
							type="search"
							placeholder="Search here city..."
							aria-label="Search"
							autoFocus="on"
							onChange={handleCity}
						/>
						<button
							className="btn btn-secondary rounded-5 ms-3 p-3"
							type="submit"
							value="Search"
						>
							Search
						</button>
						<button
							className="btn btn-secondary rounded-5 ms-3"
							type="submit"
							value="Current"
							onClick={handleCurrentLocation}
						>
							Current Location
						</button>
					</form>
				</div>
				<CurrentWeather data={weatherData} />
				<DailyForecast
					coordinates={weatherData.coordinates}
					city={weatherData.city}
				/>
				<Footer />
			</div>
		);
	} else {
		handleSearch();
		return null;
	}
}
