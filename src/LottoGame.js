import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './LottoGame.css';

class LottoGame extends Component {
	static defaultProps = {
		title: 'Lottery',
		maxValue: 40,
		numOfBalls: 6
	};
	constructor(props) {
		super(props);
		this.state = { number: Array.from({ length: this.props.numOfBalls }) };
	}
	generate() {
		this.setState((st) => ({
			number: st.number.map((n) => Math.floor(Math.random() * this.props.maxValue) + 1)
		}));
	}
	handleClick = () => {
		this.generate();
	};
	render() {
		return (
			<section className="LottoGame">
				<h1>{this.props.title}</h1>
				<div>{this.state.number.map((n) => <LottoBall number={n} />)}</div>
				<button onClick={this.handleClick}>Get Lotto Numbers</button>
			</section>
		);
	}
}

export default LottoGame;
