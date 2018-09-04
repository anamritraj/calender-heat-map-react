import React from 'react'
import Day from '../Day/Day';

export default (props) => {
    
    var translate = "translate(" + props.x + "," + props.y + ")";

    return (
        <g transform={translate}>
            <Day width="8" height="8" x="11" y="0" fill="#ebedf0" data-count="0" data-date="2017-09-03"></Day>
            <Day width="8" height="8" x="11" y="10" fill="#ebedf0" data-count="0" data-date="2017-09-04"></Day>
            <Day width="8" height="8" x="11" y="20" fill="#ebedf0" data-count="0" data-date="2017-09-05"></Day>
            <Day width="8" height="8" x="11" y="30" fill="#ebedf0" data-count="0" data-date="2017-09-06"></Day>
            <Day width="8" height="8" x="11" y="40" fill="#ebedf0" data-count="0" data-date="2017-09-07"></Day>
            <Day width="8" height="8" x="11" y="50" fill="#ebedf0" data-count="0" data-date="2017-09-08"></Day>
            <Day width="8" height="8" x="11" y="60" fill="#ebedf0" data-count="0" data-date="2017-09-09"></Day>
        </g>
    )
}
