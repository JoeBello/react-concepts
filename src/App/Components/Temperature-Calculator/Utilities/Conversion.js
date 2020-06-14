class Conversion {
	toCelsius(fahrenheit) {
		return (fahrenheit - 32) * 5 / 9;
	}

	toFahrenheit(celsius) {
		return (celsius * 9 / 5) + 32;
	}

	tryConvert(temperature, convert) {
		const input = parseFloat(temperature);

		if (!temperature || isNaN(temperature)) {
			return '';
		}

		const output = convert(input);
		const rounded = Math.round(output * 1000) / 1000;
		return rounded.toString();
	}
}

export default Conversion;
