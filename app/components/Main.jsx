var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return (
      <div>
          <Nav/>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {props.children}
              </div>
            </div>
          </div>
      </div>
    );
};

module.exports = Main;
