var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var CountdownForm = require('CountdownForm');

var Timer = React.createClass({
    getInitialState: function() {
        return {time: 0, clockStatus: 'stopped'}
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.clockStatus !== prevState.clockStatus) {
            switch (this.state.clockStatus) {
                case 'running':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({time: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            });
        }, 1000);
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    handleClockStatusChange: function(clockStatus) {
        this.setState({clockStatus: clockStatus});
    },
    render: function() {
        var {time, clockStatus} = this.state;
        return (
            <div>
                <h3 className="page-title">Timer</h3>
                <div className="countdown center-block">
                    <Clock time={time}/>
                </div>
                <Controls clockStatus={clockStatus} onStatusChange={this.handleClockStatusChange}/>
            </div>
        );
    }
});

module.exports = Timer;
