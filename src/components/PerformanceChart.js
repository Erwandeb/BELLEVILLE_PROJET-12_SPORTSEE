import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

/**
* This component render a radar chart with performance activity
* Data come from state Home.js
* We are using the library Rechart.js 
*
* @author Erwan
* @version 1.1
*/


const PerformanceChart = ({performance}) => {
    if(!performance.kind) {
        return null
    }

    if(!performance.data) {
        return null
    }

    console.log(performance.data)
    return (
        <div className="radarChartPerformance">
            <ResponsiveContainer 
                width="100%" 
                height="100%"
                margin={{
                    top: 10,
                    right: 10,
                    left: 10,
                    bottom: 10,
                }}
            >
                <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    outerRadius="80%" 
                    data={performance.data}
                    fill="#FFFFFF" 
                >
                    <PolarGrid 

                    />
                    <PolarAngleAxis 
                        dataKey="kind"
                        axisLine={false}
                    />
                    <PolarRadiusAxis 
                        axisLine={false}
                        tick={false}
                    />
                    <Radar 
                        name="Mike"
                        dataKey="value" 
                        stroke="#FF0101" 
                        fill="#FF0101" 
                        fillOpacity={0.5} 
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PerformanceChart;