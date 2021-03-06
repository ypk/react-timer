var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
      <div>
          <Nav/>
          <div className="container">
            <div className="row">
              <div className="center-block center-custom">
                {props.children}
              </div>
            </div>
          </div>
      </div>
    );
};

module.exports = Main;
