var React = require('react');

var CountdownForm = React.createClass({
    processForm: function(e){
      e.preventDefault();
      var strTime = this.refs.time.value;
      if(strTime.match(/^[0-9]*$/)){
        this.refs.time.value = "";
        var time = parseInt(strTime, 10);
        this.props.setTime(time);
      }
    },
    render: function() {
        return (
            <form ref="form" onSubmit={this.processForm} className="form-horizontal countdown-form">
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type="text" ref="time" placeholder="Enter the time in seconds" className="form-control form-control-custom" id="input"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input type="submit" className="btn btn-custom btn-large btn-block" value="Start"/>
                    </div>
                </div>
            </form>
        );
    }
});

module.exports = CountdownForm;
