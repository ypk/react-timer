var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer Test Suite', () => {
    it('Should Exist', () => {
        expect(Timer).toExist();
    });

    it('Should start the timer', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleClockStatusChange('running');

        setTimeout(() => {
            var clockStatus = timer.state.clockStatus;
            var time = timer.state.time;

            expect(clockStatus).toBe('running');
            expect(time).toBe(1);
            done();
        }, 1001);
    });

    it('Should pause the timer', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.setState({time: 10});

        timer.handleClockStatusChange('running');
        timer.handleClockStatusChange('paused');

        setTimeout(() => {
            var clockStatus = timer.state.clockStatus;
            var time = timer.state.time;

            expect(clockStatus).toBe('paused');
            expect(time).toBe(10);
            done();
        }, 1001);
    });


    it('Should stop the timer', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.setState({time: 10});

        timer.handleClockStatusChange('running');
        timer.handleClockStatusChange('stopped');

        setTimeout(() => {
            var clockStatus = timer.state.clockStatus;
            var time = timer.state.time;

            expect(clockStatus).toBe('stopped');
            expect(time).toBe(0);
            done();
        }, 1001);
    });
});
