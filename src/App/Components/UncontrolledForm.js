import React from 'react';

class UncontrolledForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.input = React.createRef();
	}

	handleSubmit(event) {
		alert('Form submitted');
		console.log('event: ', event);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input
						defaultValue="default"
						type="text"
						ref={this.input}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default UncontrolledForm
