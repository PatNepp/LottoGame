import './App.css';
import LottoGame from './LottoGame';

function App() {
	return (
		<div className="App">
			<LottoGame />
			<LottoGame title="Mini Lotto" maxValue={10} numOfBalls={4} />
			<LottoGame title="Match Three" maxValue={3} numOfBalls={3} />
		</div>
	);
}

export default App;
