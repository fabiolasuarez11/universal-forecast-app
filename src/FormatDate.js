import React from 'react';

export default function FormatDate(props) {
	const weekDays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const day = weekDays[props.date.getDay()];
	let hours = props.date.getHours();
	if (hours < 10) {
		hours = `0${hours}`;
	}
	let minutes = props.date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	return (
		<React.Fragment>
			<p className="main-today m-0 pt-4 text-center">
				{day} {hours}:{minutes}
			</p>
		</React.Fragment>
	);
}
