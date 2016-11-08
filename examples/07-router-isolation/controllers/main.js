var React = require('react');
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
//import { browserHistory } from 'react-router';

var Main = require('../views/main');

module.exports = React.createClass({
    onRouteClick: function(event, url) {
            console.log(event);
            console.log(url);
            //browserHistory.push('/repos');
            browserHistory.push(url);
        },

    render: function() {
        return (
            <Main onClick={this.onRouteClick}/>
        )
    }
});
