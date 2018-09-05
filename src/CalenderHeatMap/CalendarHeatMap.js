import React, { Component } from 'react'
import Day from './Day/Day';
import Week from './Week/Week';

export default class CalendarHeatMap extends Component {
    constructor(props){
        super(props)

        this.state = {
            start_date: "",
            end_date: ""
        }
    }


    generateWeeksForYears = (start_date, end_date) => {
        let output = [],
            x = 0,
            y = 0;
        for (let index = 0; index < 52; index++) {
            output.push(<Week x={x} y={y}></Week>);
            x += 11;
        }

        return output;
    }

    
    render() {
        return (
            <div className="text-center">
                <h1>calendar HeatMap</h1>
                <div>
                    <svg width="563" height="88" className="js-calendar-graph-svg">
                        <g transform="translate(16, 20)">
                            {this.generateWeeksForYears()}
                            <text x="11" y="-8" className="month">Sep</text>
                            <text x="51" y="-8" className="month">Oct</text>
                            <text x="101" y="-8" className="month">Nov</text>
                            <text x="141" y="-8" className="month">Dec</text>
                            <text x="191" y="-8" className="month">Jan</text>
                            <text x="231" y="-8" className="month">Feb</text>
                            <text x="271" y="-8" className="month">Mar</text>
                            <text x="311" y="-8" className="month">Apr</text>
                            <text x="361" y="-8" className="month">May</text>
                            <text x="401" y="-8" className="month">Jun</text>
                            <text x="441" y="-8" className="month">Jul</text>
                            <text x="491" y="-8" className="month">Aug</text>
                            <text textAnchor="start" className="wday" dx="-12" dy="8">Sun</text>
                            <text textAnchor="start" className="wday" dx="-12" dy="17">Mon</text>
                            <text textAnchor="start" className="wday" dx="-12" dy="32">Tue</text>
                            <text textAnchor="start" className="wday" dx="-12" dy="37">Wed</text>
                            <text textAnchor="start" className="wday" dx="-12" dy="57">Thu</text>
                            <text textAnchor="start" className="wday" dx="-12" dy="57">Fri</text>
                            <text textAnchor="start" className="wday" dx="-12" dy="81">Sat</text>
                        </g>
                    </svg>
                </div>
            </div>
        )
    }
}