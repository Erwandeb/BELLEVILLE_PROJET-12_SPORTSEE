import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
* This component render a tiny line with daily activity
* Data come from state Home.js
* We are using the library Rechart.js 
*
* @author Erwan
* @version 1.1
*/


const AverageSession = ({ average }) => {

    if(!average.sessions) {
        return null
    }
    


    
console.log(average.sessions)

    return (
        <div className="averageSession">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                    width={258}
                    height={263} 
                    data={average.sessions}
                    margin={{
                        top: 50,
                        right: 5,
                        left: 5,
                        bottom: 5,
                    }}
                    
                >
                    <defs>
                        <linearGradient id="colorGradient" x1 ="0" y1="0" x2="0" y2="0">
                            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4}></stop>
                            <stop offset="75%" stopColor="#FFFFFF" stopOpacity={0.5}></stop>
                        </linearGradient>
                    </defs>
                    <Line
                        type="monotone" 
                        dataKey="sessionLength" 
                        stroke="#FFFFFF"
                        strokeWidth={3} 
                        dot={{fill:"#FFFFFF", stroke:"#FFFFFF" }}
                        activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }}
                        strokeDashArray="4 1 2"
                        fill="url(#color)"
                    />
                        <XAxis 
                        dataKey="day"
                        tickLine={false}
                        axisLine={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AverageSession;