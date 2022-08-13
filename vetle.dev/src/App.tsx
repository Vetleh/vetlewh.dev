import './App.css';
import Greeting from './pages/greeting/Greeting';
import Education from './pages/education/Education';
import About from './pages/about/About';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Greeting></Greeting>
				<About></About>
				<Education></Education>
			</header>
		</div>
	);
}

export default App;
