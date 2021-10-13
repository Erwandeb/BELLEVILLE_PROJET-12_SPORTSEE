import React from 'react';
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
   
    const circleSize = 200;

    return (
        <div className="dailyScoreChart">
            <p className="title-daily-score">Score</p>
            <div className="affichage-daily-score">
                <p className="score-pourcentage">{dailyScore}%</p>
                <p className="texte-score"> de votre objectif</p>
            </div>
            <RadialBarChart
                width={circleSize}
                height={circleSize}
                innerRadius="10%"
                outerRadius="80%"
                barSize={2}
                data={[{value:dailyScore}]}
                startAngle={90}
                fill="#FF0000"
                blendStroke
            >
                <RadialBar
                    background
                    clockWise
                    dataKey="value"
                    fill="#FF0000"
                    minAngle={15}
                />

                <text
                    x={circleSize / 2}
                    y={circleSize / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="progress-label"
                    fill="#FF0FF0"
                    >
                    {dailyScore}%
                    de votre objectif
                </text>
            </RadialBarChart>
        </div>
    );
};

export default DailyScore;