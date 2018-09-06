import React, { Component } from 'react'
import Week from './Week/Week';
import { MILLISECONDS_IN_A_DAY, DAYS_IN_A_WEEK } from './utilities'
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
export default class CalendarHeatMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            start_date: "",
            end_date: ""
        }
    }
    /**
     * This function returns the number of weeks and days between any two dates.
     * @param {Date Object} start_date Date from which the graph starts
     * @param {Date Object} end_date Date till which the graph needs to be rendered
     */
    getNumberOfWeeks(start_date, end_date) {
        // TODO: Check if the start_date is present, otherwise just assume it to be exactly 1 year back
        let weeks, days, difference_in_days;

        difference_in_days = Math.floor((end_date.getTime() - start_date.getTime()) / MILLISECONDS_IN_A_DAY);
        
        if(difference_in_days < 0){
            throw new Error("start_date must be after end_date");
        }

        weeks = (difference_in_days > DAYS_IN_A_WEEK) ? Math.floor(difference_in_days / DAYS_IN_A_WEEK) : 0;
        days = difference_in_days - (weeks * DAYS_IN_A_WEEK);
        return { days, weeks }
    }

    generateWeeksForYears = (numberOfWeeks) => {
        let weekTags = [], x = 0, y = 0;
        while (numberOfWeeks > 0) {
            weekTags.push(<Week key={numberOfWeeks} x={x} y={y}></Week>);
            x += 11;
            numberOfWeeks--;
        }
        return weekTags;
    }

    render() {
        let {weeks} = this.getNumberOfWeeks(new Date("09/28/2017"), new Date("09/23/2018"))
        return (
            <ErrorBoundry>
                <div className="text-center">
                    <h1>Calendar HeatMap</h1>
                    <div>
                        <svg width="590" height="88" className="js-calendar-graph-svg">
                            <g>
                                {this.generateWeeksForYears(weeks)}
                                {/*
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
                                */}
                            </g>
                        </svg>
                    </div>
                </div>
            </ErrorBoundry>
        )
    }
}