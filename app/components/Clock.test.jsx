var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock Test Suite', () => {
  it('Should Exist', () => {
    expect(Clock).toExist();
  });

  it('Should convert seconds to time', () => {
    var initialSeconds = 900;
    var clock = TestUtils.renderIntoDocument(<Clock/>);
    var expectedTime = "15:00";
    var convertedTime = clock.formatTime(initialSeconds);

    expect(convertedTime).toBe(expectedTime);
  });

  describe('Clock Test Suite', () => {
    it('Should render clock to output', ()=>{
      var clock = TestUtils.renderIntoDocument(<Clock time={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var resultText = "01:02";
      var domText = $el.find(".clock-text").text();

      expect(domText).toBe(resultText);
    });
  });
});
