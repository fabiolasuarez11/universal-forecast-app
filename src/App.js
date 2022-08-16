import Header from './Header';
import CurrentWeather from './CurrentWeather';
import DailyForecast from './DailyForecast';
import Footer from './Footer';

import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<CurrentWeather />
			<DailyForecast />
			<Footer />
		</div>
	);
}

export default App;
