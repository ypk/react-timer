var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('AppStyles');

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}></IndexRoute>
      <Route path="countdown" component={Countdown}></Route>
    </Route>
</Router>, document.getElementById('app'));
