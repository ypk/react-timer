var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <span className="navbar-brand">ReactTime App</span>
          </div>

          <div className="collapse navbar-collapse" id="app-navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <IndexLink activeClassName="" activeStyle={{
                    fontWeight: 'bold'
                }} to="/">Timer</IndexLink>
              </li>
              <li>
                <Link activeStyle={{
                    fontWeight: 'bold'
                }} to="/countdown">Countdown</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

module.exports = Nav;
