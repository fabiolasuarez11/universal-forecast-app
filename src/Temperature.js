import React, { useState } from 'react';

export default function Temperature(props) {
	const [unit, setUnit] = useState('fahrenheit');

	function displayCelsius(event) {
		event.preventDefault();
		setUnit('celsius');
	}

	function displayFahrenheit(event) {
		event.preventDefault();
		setUnit('fahrenheit');
	}

	function celsius() {
		return (props.fahrenheit - 32) * (5 / 9);
	}

	if (unit === 'fahrenheit') {
		return (
			<React.Fragment>
				<span className="m-0">{props.fahrenheit}</span>
				<span>
					°F |{' '}
					<a href="/" className="tempUnit" onClick={displayCelsius}>
						°C
					</a>
				</span>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<span className="m-0">{Math.round(celsius())}</span>
				<span>
					<a href="/" className="tempUnit" onClick={displayFahrenheit}>
						°F
					</a>{' '}
					| °C
				</span>
			</React.Fragment>
		);
	}
}
