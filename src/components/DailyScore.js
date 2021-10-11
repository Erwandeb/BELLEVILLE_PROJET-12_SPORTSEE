import React from 'react';
import { PieChart, Pie,} from 'recharts';
/**
* This component render a radar chart with daily score activity
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
   

    const dailyScore = user.todayScore*100
   

    return (
        <div className="dailyScoreChart">
            <p className="title-daily-score">Score</p>
            <div className="affichage-daily-score">
                <p className="score-pourcentage">{dailyScore}% </p>
                <p className="texte-score"> de votre objectif</p>
            </div>
            
            <PieChart 
                width={258}
                height={263} 
            >
                <Pie
                    data={user}
                    cx={50}
                    cy={50}
                    innerRadius={10}
                    outerRadius={10}
                    fill="#FF0000"
                    paddingAngle={5}
                    dataKey={user.dailyScore*100}
                >
                </Pie>
            </PieChart>

        </div>
    );
};

export default DailyScore;