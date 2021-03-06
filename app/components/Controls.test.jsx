var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls Test Suite', () => {

  it('Should Exist', () => {
    expect(Controls).toExist();
  });

  describe('Controls render', () => {

    it('Should render pause button when running', () => {
      var controls = TestUtils.renderIntoDocument(<Controls clockStatus="running" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      var pausedButton = $el.find("input").val();
      expect(pausedButton).toBe('Pause');
    });

    it('Should render resume button when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls clockStatus="paused" />);
      var $el = $(ReactDOM.findDOMNode(controls));
      var resumeButton = $el.find("input").val();
      expect(resumeButton).toBe('Resume');
    });
  });

});
