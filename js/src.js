require('../sass/main.scss');

var Todo = require('./Todo.jsx');
var React = require('react');
var ReactDOM = require('react-dom');


ReactDOM.render(<Todo />, document.getElementsByTagName('body')[0]);
