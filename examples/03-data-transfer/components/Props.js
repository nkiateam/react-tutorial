'use strict';

var React = require('react');
var PropTypes = require('react').PropTypes;
//import { PropTypes } from 'react';

var Props = React.createClass({
	displayName: 'Props',
    propTypes: {
    	name: PropTypes.string,
    	index: PropTypes.number,
        disabled: PropTypes.bool
    },
	getDefaultProps: function() {
		// 클래스가 생성될 때 한번 호출되고 캐시된다.
		// 부모 컴포넌트에서 prop이 넘어오지 않은 경우 (in 연산자로 확인) 매핑의 값이 this.props에 설정된다.		
		return {name: 'default name', index: 0, disabled: false};
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
    			index: {this.props.index}<br/>
    			<button disabled={this.props.disabled}>{this.props.name}</button>
    		</div>
    	);
    }
});

module.exports = Props;
