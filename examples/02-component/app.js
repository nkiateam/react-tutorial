'use strict';

var React = require('react');
var ReactDom = require('react-dom');

var LifeCycle = require('./components/LifeCycle');

var Main = React.createClass({
	onClick: function() {
		var name;
		if(this.state.name === '홍길동') {
			name = 'Tom';
		}else {
			name = '홍길동';
		}
		this.setState({name: name});
	},
	getInitialState: function() {
        return {name: '홍길동'};
    },
    render: function() {
        return (
        	<div>
            	<LifeCycle name={this.state.name} />
            	<button onClick={this.onClick}>change</button>
            </div>
        )
    }
});

ReactDom.render(<Main />, document.getElementById('app'));