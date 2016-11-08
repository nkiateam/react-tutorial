var React = require('react');

import { Router, Route, browserHistory } from 'react-router';

var Main = require('./controllers/main');
var About = require('./controllers/about');
var Repos = require('./controllers/repos');

module.exports = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            {/* add the routes here */}
            <Route path="/about" component={About} />
            <Route path="/repos" component={Repos} />
        </Route>
    <Route path="/repos1" component={Repos} />
    </Router>
)
