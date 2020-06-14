import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import Conversion from './Utilities/Conversion';

const { tryConvert, toCelsius, toFahrenheit } = new Conversion();

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = { scale: 'c', temperature: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}

	handleChange(event) {
		this.setState({ temperature: event.target.value});
	}

	handleCelsiusChange(temperature) {
		this.setState({ scale: 'c', temperature});
	}

	handleFahrenheitChange(temperature) {
		this.setState({ scale: 'f', temperature});
	}

	render() {
		const { scale, temperature } = this.state;
		const celsius =  scale === 'f'
			? tryConvert(temperature, toCelsius)
			: temperature;
		const fahrenheiht = scale === 'c'
			? tryConvert(temperature, toFahrenheit)
			: temperature;

		return (
			<fieldset>
				<TemperatureInput
					scale="c"
					temperature={celsius}
					onTemperatureChange={this.handleCelsiusChange}
				/>
				<TemperatureInput
					scale="f"
					temperature={fahrenheiht}
					onTemperatureChange={this.handleFahrenheitChange}
				/>
				<BoilingVerdict celsius={parseFloat(celsius)} />
			</fieldset>
		)
	}
}

export default Calculator;
