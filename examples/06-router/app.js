var React = require('react');
var ReactDom = require('react-dom');

// using an ES6 transpiler, like babel
//import { Router, Route, Link, hashHistory } from 'react-router'

// not using an ES6 transpiler
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

var About = require('./controllers/about');
var Repos = require('./controllers/repos');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h1>App</h1>
                <ul role="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos</Link></li>
                </ul>
            </div>
        )
    }
});

ReactDom.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        {/* add the routes here */}
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Router>
), document.getElementById('app'));
