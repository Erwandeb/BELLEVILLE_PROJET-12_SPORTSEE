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
    const circleSize = 2000;

    return (
        <div className="dailyScoreChart">
            <p className="title-daily-score">Score</p>
                <div className="affichage-daily-score">
                    <p className="score-pourcentage">{dailyScore}%</p>
                    <p className="texte-score"> de votre objectif</p>
                </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    innerRadius="70%"
                    outerRadius="70%"
                    barSize={10}
                    data={[{value:dailyScore}]}
                    startAngle={90}
                    fill="#FF0000"
                    blendStroke
                    cx="50%"
                    cy="50%"
                    radius={10}
                >
                    <RadialBar
                        background
                        dataKey="value"
                        fill="#FF0000"
                        minAngle={15}
                        clockWise={false}
                        radius={10}
                    />

              
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