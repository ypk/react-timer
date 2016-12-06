var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function() {
        return {time: 0, clockStatus: 'stopped'}
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (prevState.clockStatus !== this.state.clockStatus) {
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
    componentWillUnmount: function(){
      clearInterval(this.timer);
      this.timer = undefined;
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newTime = this.state.time - 1;
            this.setState({
                time: newTime >= 0
                    ? newTime
                    : 0
            });

            if(newTime ===0){
                this.setState({clockStatus: 'stopped'});
            }
        }, 1000);
    },
    handleSetTime: function(time) {
        this.setState({time: time, clockStatus: 'running'});
    },
    handleClockStatusChange: function(clockStatus) {
        this.setState({clockStatus: clockStatus});
    },
    render: function() {
        var {time, clockStatus} = this.state;
        var renderControls = () => {
            if (clockStatus !== "stopped") {
                return <Controls clockStatus={clockStatus} onStatusChange={this.handleClockStatusChange}/>
            } else {
                return <CountdownForm setTime={this.handleSetTime}/>
            }
        };

        return (
            <div>
                <div className="countdown center-block">
                    <Clock time={time}/>
                </div>
                {renderControls()}
            </div>
        );
    }
});

module.exports = Countdown;
