import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
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

    const DailyScore = user.todayScore*100
  

    return (
        <div className="dailyScoreChart">
            <PieChart width={800} height={400}>
                <Pie
                    data={user.todayScore}
                    cx={50}
                    cy={50}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#FF0000"
                    paddingAngle={5}
                    dataKey={DailyScore}
                >
                </Pie>
            </PieChart>
        </div>
    );
};

export default DailyScore;