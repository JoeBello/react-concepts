import React from 'react';

class ControlledForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: '', essay: '', select: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		// console.log(event.target.name)
		this.setState({ [event.target.name]: event.target.value });
		console.log('this.state: ', this.state);
	}

	handleSubmit(event) {
		// console.log('Submitted: ', event);
		console.log('this.state: ', this.state);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Essay:
					<textarea
						name="essay"
						value={this.state.essay}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					<select
						name="select"
						value={this.state.select}
						onChange={this.handleChange}
					>
						<option></option>
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
						<option>Option 4</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default ControlledForm;
