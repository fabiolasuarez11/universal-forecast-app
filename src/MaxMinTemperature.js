import React, { useState } from 'react';

export default function MaxMinTemperature(props) {
	const unit = useState('fahrenheit');
	const [maxUnit, setMaxUnit] = useState('maxTemp');
	const [minUnit, setMinUnit] = useState('minTemp');

	function maxCelsius() {
		setMaxUnit('maxTemp');
		return (props.maxTemp - 32) * (5 / 9);
	}

	function minCelsius() {
		setMinUnit('minTemp');
		return (props.minTemp - 32) * (5 / 9);
	}

	if (unit === 'fahrenheit' && maxUnit === 'maxTemp' && minUnit === 'minTemp') {
		return (
			<React.Fragment>
				Max <span className="m-0 ms-1">{props.maxTemp}</span>°{' '}
				<i className="fa-solid fa-temperature-full m-1"></i> • Min{' '}
				<span className="m-0 ms-1">{props.minTemp}</span>°{' '}
				<i className="fa-solid fa-temperature-empty m-1"></i>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				Max <span className="m-0 ms-1">{Math.round(maxCelsius())}</span>°{' '}
				<i className="fa-solid fa-temperature-full m-1"></i> • Min{' '}
				<span className="m-0 ms-1">{Math.round(minCelsius())}</span>°{' '}
				<i className="fa-solid fa-temperature-empty m-1"></i>
			</React.Fragment>
		);
	}
}
