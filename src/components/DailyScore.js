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
   
    console.log("user",user.todayScore)
    const dailyScore = user.todayScore*100
   
    const circleSize = 50;

    return (
        <div className="dailyScoreChart">
            <p className="title-daily-score">Score</p>
            <div className="affichage-daily-score">
                <p className="score-pourcentage">{dailyScore}% </p>
                <p className="texte-score"> de votre objectif</p>
            </div>
            
            <RadialBarChart
                width={circleSize}
                height={circleSize}
                cx={circleSize / 2}
                cy={circleSize / 2}
                innerRadius="10%"
                outerRadius="80%"
                barSize={15}
                data={user}
                startAngle={90}
                endAngle={-270}
                fill="#FF0000"
                blendStroke
            >
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                    fill="#FF0000"
                    dataKey="todayScore"
                    
                />
                <RadialBar
                    background
                    clockWise
                    dataKey={user.todayScore*100}
                    cornerRadius={circleSize / 2}
                    fill="#FF0000"
                    minAngle={15}
                />
            </RadialBarChart>

        </div>
    );
};

export default DailyScore;