import React from 'react';

export default function FormatDateCard(props) {
	const yearMonths = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

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
	const yearMonth = yearMonths[props.date.getMonth()];

	console.log(props.date.getDay());

	return (
		<span className="m-0">
			{day} {hours}:{minutes}, {yearMonth} {props.date.getDate()},{' '}
			{props.date.getFullYear()}
		</span>
	);
}
