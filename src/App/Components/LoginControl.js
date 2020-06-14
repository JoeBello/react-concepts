import React from 'react';
import Greeting from './Greeting';
import Status from './Status';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginControl extends React.Component {
	constructor (props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = { isLoggedIn: false };
	}

	handleLoginClick() {
		this.setState({ isLoggedIn: true });
	}

	handleLogoutClick() {
		this.setState({ isLoggedIn: false });
	}

	render() {
		const button = this.state.isLoggedIn
			? <LogoutButton onClick={ this.handleLogoutClick } />
			: <LoginButton onClick={ this.handleLoginClick } />;
		
		return (
			<div>
				<Greeting isLoggedIn={ this.state.isLoggedIn } />
				<Status isLoggedIn={ this.state.isLoggedIn } />
				{ button }
			</div>
		);
	}
}

export default LoginControl;
