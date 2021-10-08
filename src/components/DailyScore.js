import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
/**
* This component render a radar chart with performance activity
* Data come from state Home.js
* We are using the library Rechart.js 
*
* @author Erwan
* @version 1.1
*/


const DailyScore = ({ user }) => {

    if(!user.todayScore) {
        return null
    }
    console.log(user.todayScore)

   

    return (
        <div className="dailyScoreChart">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                    cx="50%" 
                    cy="50%" 
                    innerRadius="10%" 
                    outerRadius="80%" 
                    barSize={10} 
                    data={user}>
                    <RadialBar
                        minAngle={15}
                        label={{ position: 'insideStart', fill: '#fff' }}
                        background
                        clockWise
                        dataKey="todayScore"
                    />
                    <Legend 
                        iconSize={10} 
                        layout="vertical" 
                        verticalAlign="middle" 
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DailyScore;