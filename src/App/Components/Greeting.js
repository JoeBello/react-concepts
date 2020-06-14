import React from 'react';

class Greeting extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: props.isLoggedIn };
	}

	UserGreeting() {
		return <h1>Welcome Back.</h1>
	}

	GuestGreeting() {
		return <h1>Please sign up.</h1>
	}

	render() {
		return this.props.isLoggedIn
			? this.UserGreeting()
			: this.GuestGreeting();
	}
}

export default Greeting;
