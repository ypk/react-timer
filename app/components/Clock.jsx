var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function(){
    time: 0
  },
  propTypes:{
    time: React.PropTypes.number
  },
  formatTime : function(time){
    var seconds = time % 60;
    var minutes = Math.floor(time / 60);

    if(seconds < 10){
      seconds = "0"+seconds
    }

    if(minutes < 10){
      minutes = "0"+minutes
    }

    return minutes+":"+seconds;
  },
  render: function(){
    var {time} = this.props;
    return(
      <div className="center-block clock">
        <span className="clock-text">{this.formatTime(time)}</span>
      </div>
    );
  }
});

module.exports = Clock;
