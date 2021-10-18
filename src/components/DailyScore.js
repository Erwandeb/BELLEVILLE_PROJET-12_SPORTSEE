import React from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer,PolarAngleAxis } from 'recharts';

/**
* This component render a pie chart with daily score activity
* Data come from state Home.js
* We are using the library Rechart.js 
*
* @author Erwan
* @version 1.1
*/

const DailyScore = ({ user }) => {

    // if "undefined" error
    if(!user.todayScore) {
        return null
    }
   
    console.log("user", user.todayScore);
    const dailyScore = user.todayScore*100;
    const testing = <div>hello</div>
    const circleSize = 2000;

    return (
        <div className="dailyScoreChart">
            <p className="title-daily-score">Score</p>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                   
                    innerRadius="75%"
                    outerRadius="75%"
                    barSize={10}
                    data={[{value:dailyScore}]}
                    startAngle={90}
                    fill="#FF0000"
                    blendStroke
                    cx="50%"
                    cy="50%"
                     
                >
                    <RadialBar
                        background
                        radius={3} 
                        dataKey="value"
                        fill="#FF0000"
                        minAngle={15}
                        clockWise={false}
                    />

                    <text
                       x="50%"
                       y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="progress-label"
                        fill="#000000"
                        >
                        {dailyScore}%
                        de votre objectif
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};



// Prop-types verification
DailyScore.propTypes = {
    data: PropTypes.object,
    dataKey: PropTypes.string,
    cx: PropTypes.string,
    cy: PropTypes.string,
    fill :PropTypes.string,
    name:PropTypes.string,
    innerRadius: PropTypes.string,
    fillOpacity:PropTypes.number,
    axisLine:PropTypes.bool,
    tickLine:PropTypes.bool,
    width:PropTypes.number,
    height:PropTypes.number,
    x:PropTypes.number,
    y:PropTypes.number,
    dailyScore:PropTypes.number,
}

export default DailyScore;