import React from 'react';

class LoginButton extends React.Component {
	render() {
		return (
			<button onClick = { (e) => this.props.onClick(e) }>Login</button>
		)
	}	
}

export default LoginButton;
