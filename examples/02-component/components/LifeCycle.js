// Component Specs and Lifecycle
// 참고사이트
// http://reactkr.github.io/react/docs/component-specs-ko-KR.html
'use strict';

var React = require('react');
var PropTypes = require('react').PropTypes;
//import { PropTypes } from 'react';

var LifeCycle = React.createClass({
	displayName: 'LifeCycle',
    propTypes: {
    	id: PropTypes.string,
        className: PropTypes.string,
        options: PropTypes.object,
        name: PropTypes.string,
        items: PropTypes.array,
        selectedIndex: PropTypes.number,
        disabled: PropTypes.bool,
        init: PropTypes.func,        
//		category: PropTypes.oneOf(['News','Photos']).isRequired,
//		dialog: PropTypes.instanceOf(Dialog).isRequired,
		value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ])
    },
	getDefaultProps: function() {
		// 클래스가 생성될 때 한번 호출되고 캐시된다.
		// 부모 컴포넌트에서 prop이 넘어오지 않은 경우 (in 연산자로 확인) 매핑의 값이 this.props에 설정된다.
		console.log('1. getDefaultProps');
		return {value: 'default value'};
	},
	getInitialState: function() {
		// 컴포넌트가 마운트되기 전 (한번 호출) / 리턴값은 this.state의 초기값으로 사용
		console.log('2. getInitialState');
        return {data: []};
    },
	componentWillMount: function() {
		// 최초 렌더링이 일어나기 직전(한번 호출)
		console.log('3. componentWillMount');
    },
    componentDidMount: function() {
		// 최초 렌더링이 일어난 다음(한번 호출)
    	console.log('5. componentDidMount');
    },
	componentWillReceiveProps: function(nextProps) {
		// 컴포넌트가 새로운 props를 받을 때 호출(최초 렌더링 시에는 호출되지 않음)
		console.log('6. componentWillReceiveProps');
	},
	shouldComponentUpdate: function(nextProps, nextState) {
        // 새로운 props나 state를 받았을 때 렌더링 전에 호출(최초 렌더링 시에는 호출되지 않음)
        console.log('7. shouldComponentUpdate');

        // false 면 render 호출하지 않음(componentWillUpdate 와 componentDidUpdate 역시 호출되지 않음)
        return true;    // default true
    },
    componentWillUpdate: function(nextProps, nextState) {
		// 새로운 props나 state를 받았을 때 렌더링 직전에 호출(최초 렌더링 시에는 호출되지 않음)
		console.log('8.componentWillUpdate');
    },
    componentDidUpdate: function(prevProps, prevState) {
		// 컴포넌트의 업데이트가 DOM에 반영된 직후에 호출(최초 렌더링 시에는 호출되지 않음)
		console.log('10.componentDidUpdate');
    },
    componentWillUnmount: function(){
		// 컴포넌트가 DOM에서 마운트 해제 되기 직전에 호출
		console.log('componentWillUnmount');
    },
    render: function() {
		// 필수 항목
    	console.log('4. render');
    	return (
    		<div>{this.props.name}</div>
    	);
    }
});

module.exports = LifeCycle;