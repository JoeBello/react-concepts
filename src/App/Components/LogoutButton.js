import React from 'react';

class LogoutButton extends React.Component {
	render() {
		return (
			<button onClick = {(e) => this.props.onClick(e)}>Logout</button>
		)
	}
}

export default LogoutButton;
