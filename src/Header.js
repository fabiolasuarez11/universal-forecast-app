import React from 'react';
import './Header.css';

export default function Header() {
	return (
		<div className="Header">
			<div className="container-fluid py-4 mb-4 rounded-5 main-header">
				<h1 className="display-5 fw-bold text-center">
					<span role="img" aria-label="world-emoji">
						🌎
					</span>
					Universal Forecast
					<span role="img" aria-label="world-emoji">
						🌍
					</span>
				</h1>
				<form className="d-flex" role="search">
					<input
						className="form-control m-2"
						type="search"
						placeholder="Search here city..."
						aria-label="Search"
						id="form"
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
					>
						Current Location
					</button>
				</form>
			</div>
		</div>
	);
}
