import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Props extends Component {
	static propTypes = {
	 	name: PropTypes.string.isRequired,
		index: PropTypes.number,
		disabled: PropTypes.bool
	};

	static defaultProps = {
		name: 'default value',
		index: 0,
		disabled: false
	};

    render() {
		// 필수 항목
    	const { name, index, disabled } = this.props;

    	return (
    		<div>
    			index: {index}<br/>
    			<button disabled={disabled}>{name}</button>
    		</div>
    	);
    }
}


export default Props;
