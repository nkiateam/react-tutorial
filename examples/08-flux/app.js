// Flux
var React = require('react');
var ReactDom = require('react-dom');

var TodoApp = require('./components/TodoApp.react');

ReactDom.render(<TodoApp />, document.getElementById('todoapp'));