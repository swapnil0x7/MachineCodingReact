import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
	const [value, setValue] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setValue((prev) => {
				if (prev >= 100) {
					clearInterval(timer);
					return prev;
				}
				return prev + 1;
			});
		}, 100);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className='App'>
			<div className='main'>
				<h4>Progress Bar</h4>
				<ProgressBar value={value} />
			</div>
		</div>
	);
}

export default App;
