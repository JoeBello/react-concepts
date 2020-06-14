import React from 'react';

class Status extends React.Component {
	render() {
		return (
			<div>
				The user is
				{ this.props.isLoggedIn ? ' currently ' : ' not ' }
				logged in.
			</div>
		)
	}
}

export default Status;
