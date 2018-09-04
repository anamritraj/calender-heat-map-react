import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Day from './Day/Day';
import Week from './Week/Week';

export default class CalendarHeatMap extends Component {
    render() {
        return (
            <div className="text-center">
                <h1>calendar HeatMap</h1>
                <div>
                    <svg width="563" height="88" class="js-calendar-graph-svg">
                        <g transform="translate(16, 20)">
                            <Week x="0" y="0"></Week>
                            <Week x="11" y="0"></Week>
                            <Week x="22" y="0"></Week>
                            
                            <g transform="translate(572, 0)">
                                <Day width="8" height="8" x="-41" y="0" fill="#7bc96f" data-count="4" data-date="2018-09-02"></Day>
                                <Day width="8" height="8" x="-41" y="10" fill="#7bc96f" data-count="6" data-date="2018-09-03"></Day>
                                <Day width="8" height="8" x="-41" y="20" fill="#ebedf0" data-count="0" data-date="2018-09-04"></Day>
                            </g>
                            <text x="11" y="-8" class="month">Sep</text>
                            <text x="51" y="-8" class="month">Oct</text>
                            <text x="101" y="-8" class="month">Nov</text>
                            <text x="141" y="-8" class="month">Dec</text>
                            <text x="191" y="-8" class="month">Jan</text>
                            <text x="231" y="-8" class="month">Feb</text>
                            <text x="271" y="-8" class="month">Mar</text>
                            <text x="311" y="-8" class="month">Apr</text>
                            <text x="361" y="-8" class="month">May</text>
                            <text x="401" y="-8" class="month">Jun</text>
                            <text x="441" y="-8" class="month">Jul</text>
                            <text x="491" y="-8" class="month">Aug</text>
                            <text text-anchor="start" class="wday" dx="-12" dy="8">Sun</text>
                            <text text-anchor="start" class="wday" dx="-12" dy="17">Mon</text>
                            <text text-anchor="start" class="wday" dx="-12" dy="32">Tue</text>
                            <text text-anchor="start" class="wday" dx="-12" dy="37">Wed</text>
                            <text text-anchor="start" class="wday" dx="-12" dy="57">Thu</text>
                            <text text-anchor="start" class="wday" dx="-12" dy="57">Fri</text>
                            <text text-anchor="start" class="wday" dx="-12" dy="81">Sat</text>
                        </g>
                    </svg>
                </div>
            </div>
        )
    }
}