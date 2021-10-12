import React from 'react';
import { PieChart, Pie, Cell} from 'recharts';
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
   
    console.log("user",user)
    const dailyScore = user.todayScore*100
   
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx, cy, midAngle, innerRadius, outerRadius, percent, index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="red" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="dailyScoreChart">
            <p className="title-daily-score">Score</p>
            <div className="affichage-daily-score">
                <p className="score-pourcentage">{dailyScore}% </p>
                <p className="texte-score"> de votre objectif</p>
            </div>
            
            <PieChart 
       
            >
                <Pie
                    data={user}
                    dataKey={user.dailyScore*100}
                    cx={50}
                    cy={50}
                    outerRadius={50}
                    fill="#FF0000"
                    paddingAngle={5}
                    label={renderCustomizedLabel}
                >
                    <Cell  fill="#FF0000"/>
                </Pie>
            </PieChart>

        </div>
    );
};

export default DailyScore;