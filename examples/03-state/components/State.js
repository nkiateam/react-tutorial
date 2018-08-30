import React, { Component } from 'react';
import PropTypes from 'prop-types';

class State extends Component {

	static propTypes = {
		name: PropTypes.string,
		index: PropTypes.number,
		disabled: PropTypes.bool
	};

	static defaultProps = {
		name: 'default value',
		index: 0,
		disabled: false
	};

	state = {
		index: 0
	}

	onClick = () => {
		let index = this.state.index;
		if (index < 10) {
			this.setState({index: ++index});
		} else {
			
			this.setState({index: 0});
		}
	}

    render() {
		const { index } = this.state;
		const { onClick } = this;
    	return (
    		<div>
    			index: {index}<br/>
    			<button onClick={onClick}>Click!!</button>
    		</div>
    	);
    }
}

export default State;
