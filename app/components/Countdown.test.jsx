var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown Test Suite', () => {
  it('Should Exist', () => {
    expect(Countdown).toExist();
  });


  describe('handle SetCountdown', () => {
    it('Should setStates of to "clockStatus" and "time"', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetTime(10);

      var clockStatus = countdown.state.clockStatus;
      var time = countdown.state.time;

      expect(clockStatus).toBe('running');
      expect(time).toBe(10);

      setTimeout(()=>{
        var time = countdown.state.time;
        expect(time).toBe(9);
        done();
      }, 1001);
    });

    it('Should check if clock goes negative', () => {
      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetTime(1);

      setTimeout(()=>{
        var time = countdown.state.time;
        expect(time).toBe(0);
        done();
      }, 2001);
    });
  });

});
