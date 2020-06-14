import React from 'react';

class WarningBanner extends React.Component {
	render() {
		return this.props.warn
		? <div className="warning">Warning</div>
		: null;
	}
}

export default WarningBanner;
