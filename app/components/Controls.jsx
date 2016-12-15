var React = require('react');
var ReactDOM = require('react-dom');

var Controls = React.createClass({
    propTypes: {
        clockStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function(status) {
        return () => {
            this.props.onStatusChange(status);
        };
    },
    render: function() {
        var {clockStatus} = this.props;

        var renderButton = () => {
            if (clockStatus === "running") {
                return (
                  <div className="col-xs-6">
                      <input type="button" onClick={this.onStatusChange('paused')} className="btn btn-custom btn-large btn-block btn-pause" value="Pause"></input>
                  </div>
                );
            } else {
              if (clockStatus === "paused") {
                return (
                  <div className="col-xs-6">
                      <input type="button" onClick={this.onStatusChange('running')} className="btn btn-custom btn-large btn-block btn-start" value="Resume"></input>
                  </div>
                );
              }else{
                return (
                  <div className="col-xs-6">
                      <input type="button" onClick={this.onStatusChange('running')} className="btn btn-custom btn-large btn-block btn-start" value="Start"></input>
                  </div>
                );
              }
            }
        };

        return (
            <div className="countdown-form">
                {renderButton()}
                <div className="col-xs-6">
                    <input type="button" onClick={this.onStatusChange('stopped')} className="btn btn-custom btn-large btn-block btn-clear" value="Clear"></input>
                </div>
            </div>
        );
    }
});

module.exports = Controls;
