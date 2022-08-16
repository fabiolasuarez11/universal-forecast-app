import React from 'react';
import './Footer.css';

export default function Footer() {
	return (
		<div className="Footer">
			<div className="container-fluid p-4 pb-2 rounded-5 main-footer align-content-center">
				<p className="fw-bold text-center">
					Code with
					<span role="img" aria-label="heart-emoji">
						❤️
					</span>
					by Fabiola Suárez
				</p>
				<p className="fw-lighter text-center">
					<a
						href="https://github.com/fabiolasuarez11/weather-app-shecodes-plus"
						target="_blank"
						rel="noreferrer"
						className="repo"
					>
						Open-source Code
					</a>
				</p>
			</div>
		</div>
	);
}
