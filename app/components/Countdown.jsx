var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
    getInitialState: function() {
        return {time: 0, clockStatus: 'stopped'}
    },
    componentDidUpdate: function(prevProps, prevState){
      if(prevState.clockStatus !== this.state.clockStatus){
        switch(this.state.clockStatus){
          case 'stopped':
            break;
          case 'running':
          this.startTimer();
            break;
          default:
            break;
        }
      }
    },
    startTimer: function(){
      this.timer = setInterval(()=>{
        var newTime = this.state.time - 1;
        this.setState({time: newTime >=0? newTime : 0});
      },1000);
    },
    handleSetTime: function(time) {
        this.setState({time: time, clockStatus: 'running'});
    },
    render: function() {
        var {time} = this.state;
        return (
            <div>
                <div className="countdown center-block">
                    <Clock time={time}/>
                </div>
                <CountdownForm setTime={this.handleSetTime}/>
            </div>
        );
    }
});

module.exports = Countdown;
