import React from 'react';
// import Toggle from './Toggle';
// import Greeting from './Greeting';
import LoginControl from './Components/LoginControl';
import WarningBanner from './Components/WarningBanner';
// import List from './List';
import ControlledForm from './Components/ControlledForm';
import UncontrolledForm from './Components/UncontrolledForm';
import Calculator from'./Components/Temperature-Calculator/Calculator';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showWarning: false };

		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(state => ({ showWarning: !state.showWarning }))
	}

	render() {
		return (
			<div>
				<Calculator />
				{/* <LoginControl /> */}
				{/* <button onClick={ this.handleToggleClick }>
					{ this.state.showWarning ? 'Hide Warning' : 'Show Warning' }
				</button> */}
				{/* <WarningBanner warn={ this.state.showWarning } /> */}
				{/* <List numbers={ [1, 2, 3, 4, 5] }/> */}
				{/* <ControlledForm /> */}
				{/* <UncontrolledForm /> */}
			</div>
		);
	}
}

export default App;
