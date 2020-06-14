import React from 'react';

class ListItem extends React.Component {
	constructor(props) {
		super(props);

		this.ListItem = <li>List Item: {props.item}</li>
	}

	render() {
		return this.ListItem;
	}
}

export default ListItem;
