var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm Test Suite', () => {
  it('Should Exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call setTime with valid parameters',()=>{
    var spy = expect.createSpy();
    var countdownform = TestUtils.renderIntoDocument(<CountdownForm setTime={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownform));

    countdownform.refs.time.value='109';
    TestUtils.Simulate.submit($el[0]);
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call setTime with invalid parameters',()=>{
    var spy = expect.createSpy();
    var countdownform = TestUtils.renderIntoDocument(<CountdownForm setTime={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownform));

    countdownform.refs.time.value='109d';
    TestUtils.Simulate.submit($el[0]);
    expect(spy).toNotHaveBeenCalled();
  });

});
