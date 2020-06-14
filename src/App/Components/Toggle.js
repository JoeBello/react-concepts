import React from 'react';

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = { toggleOn: true };

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(id) {
		console.log('id: ', id);
		this.setState(state => ({
			toggleOn: !state.toggleOn
		}));
	}

	render() {
		return (
			<div>
				<h1>Toggle</h1>
				<button onClick={this.handleClick.bind(this, 12)}>
					{this.state.toggleOn ? 'ON' : 'OFF'}
				</button>
			</div>
		);
	}
}

export default Toggle;
