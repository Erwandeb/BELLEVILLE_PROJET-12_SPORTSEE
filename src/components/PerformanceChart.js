import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
* This component render a radar chart with performance activity
* Data come from state Home.js
* We are using the library Rechart.js 
*
* @author Erwan
* @version 1.1
*/


const PerformanceChart = ({performance}) => {
   
    // if "undefined" error
    if(!performance) {
        return null
    }


    return (
        <div className="radarChartPerformance">
            <ResponsiveContainer 
                width="100%" height="100%"
            >
                <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    outerRadius="60%" 
                    data={performance}
                    fill="#FFFFFF" 
                >
                    <PolarGrid 
                        outerRadius={1}
                        cx="50%" 
                        cy="50%" 
                    />
                    <PolarAngleAxis 
                        dataKey="kindName"
                        axisLine={false}   
                        tickLine={false} 
                        cy={50}
                        cx={50}
                    />
                    <PolarRadiusAxis 
                        axisLine={false}
                        tick={false}
                    />
                    <Radar 
                      
                        dataKey="value"
                        strokeOpacity={0.9} 
                        fill="#FF0101" 
                        fillOpacity={0.5} 
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};



// Prop-types verification
PerformanceChart.propTypes = {
    data: PropTypes.object,
    dataKey: PropTypes.string,
    cx: PropTypes.string,
    cy: PropTypes.string,
    fill :PropTypes.string,
    name:PropTypes.string,
    fillOpacity:PropTypes.number,
    outerRadius : PropTypes.number,
    axisLine:PropTypes.bool,
    tickLine:PropTypes.bool,
}

export default PerformanceChart;