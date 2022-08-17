import Header from './Header';
import DailyForecast from './DailyForecast';
import Footer from './Footer';

import './App.css';

function App() {
	return (
		<div className="App">
			<Header defaultCity="Salt Lake City" />
			{/* <DailyForecast /> */}
			<Footer />
		</div>
	);
}

export default App;
