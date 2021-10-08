import React from 'react';

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

    return (
        <div className="dailyScoreChart">
            
        </div>
    );
};

export default DailyScore;