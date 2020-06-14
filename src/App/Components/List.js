import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
	render() {
		return (
			<ul>
				{this.props.numbers.map((number, index) =>
					<ListItem key={index.toString()} item={number} />
				)}
			</ul>
		)
	}
}

export default List;
