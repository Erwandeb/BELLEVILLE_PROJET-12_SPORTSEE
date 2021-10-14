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

    // if "undefined" error
    if(!average) {
        return null
    }

    let tooltip;
    const CustomTooltip = ({ active, payload }) => {
        if (!active || !tooltip)    
            return null
        for (const bar of payload)
        if (bar.dataKey === tooltip)
            return <div className="tooltip-averagesession">{bar.value} min</div>
        return null
    };
   
    return (
        <div className="averageSession">
            <p className="title-graph">Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                    data={average}
                    margin={{
                        top: 70,
                        right: 15,
                        left: 15,
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
                        dot={false}
                        activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }}
                        strokeDashArray="4 1 2"
                        fill="url(#color)"
                        opacity={0.70}
                        stopOpacity={0.5}
                        onMouseOver={ () => tooltip="sessionLength" }
                    />
                    <Tooltip 
                         content={<CustomTooltip/>}
                         viewBox= {{ x: 30, y: 30, width: 600, height: 600 }}
                    />
                    <XAxis 
                        dataKey="dayWeek"
                        tickLine={false}
                        axisLine={false}
                    />
                   
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AverageSession;