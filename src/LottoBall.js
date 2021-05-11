import React, { Component } from 'react';
import './LottoBall.css';

class LottoBall extends Component {
	render() {
		return <div className="Die">{this.props.number}</div>;
	}
}

export default LottoBall;
