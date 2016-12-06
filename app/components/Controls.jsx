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
    componentWillReceiveProps: function(props){
      console.log(props)
    },
    render: function() {
        var {clockStatus} = this.props;

        var renderButton = () => {
            if (clockStatus === "running") {
                return (
                  <div className="col-xs-6">
                      <input type="button" onClick={this.onStatusChange('paused')} className="btn btn-custom btn-large btn-block" value="Pause"></input>
                  </div>
                );
            } else if (clockStatus === "paused") {
              return (
                <div className="col-xs-6">
                    <input type="button" onClick={this.onStatusChange('running')} className="btn btn-custom btn-large btn-block" value="Resume"></input>
                </div>
              );
            }
        };

        return (
            <div className="countdown-form">
                {renderButton()}
                <div className="col-xs-6">
                    <input type="button" onClick={this.onStatusChange('stopped')} className="btn btn-custom btn-large btn-block" value="Clear"></input>
                </div>
            </div>
        );
    }
});

module.exports = Controls;
