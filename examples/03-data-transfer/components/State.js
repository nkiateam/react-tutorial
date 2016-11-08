'use strict';

var React = require('react');
var PropTypes = require('react').PropTypes;
//import { PropTypes } from 'react';

var State = React.createClass({
	displayName: 'State',
	onClick: function() {
		var index = this.state.index;
		if(index < 10) {
			this.setState({index: ++index});
		}else {
			
			this.setState({index: 0});
		}
	},
	getInitialState: function() {
        return {index: 0};
    },
	/*
	componentDidMount: function() {
		// 최초 렌더링이 일어난 다음(한번 호출)
    	console.log('5. componentDidMount');
    },
	componentWillReceiveProps: function(nextProps) {
		// 컴포넌트가 새로운 props를 받을 때 호출(최초 렌더링 시에는 호출되지 않음)
		console.log('6.componentWillReceiveProps');
	},
    componentWillUpdate: function(nextProps, nextState) {
		// 새로운 props나 state를 받았을 때 렌더링 직전에 호출(최초 렌더링 시에는 호출되지 않음)
		console.log('7.componentWillUpdate');
		console.log(nextState);
    },
    componentDidUpdate: function(prevProps, prevState) {
		// 컴포넌트의 업데이트가 DOM에 반영된 직후에 호출(최초 렌더링 시에는 호출되지 않음)
		console.log('9.componentDidUpdate');
    },
    */
    render: function() {
		// 필수 항목
//    	const { name, index, disabled } = this.props;
    	return (
    		<div>
    			index: {this.state.index}<br/>
    			<button onClick={this.onClick}>Click!!</button>
    		</div>
    	);
    }
});

module.exports = State;
