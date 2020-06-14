import React from 'react';

class BoilingVerdict extends React.Component {

	render() {
		if (!this.props.celsius || isNaN(this.props.celsius)) {
			return null;
		}

		return (
			this.props.celsius >= 100
				? <p>The water would boil.</p>
				: <p>The water would not boil.</p>
		);
	}

}

export default BoilingVerdict;
