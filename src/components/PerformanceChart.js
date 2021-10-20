import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Text } from 'recharts';
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
   
     // handle "undefined" error
    if(!performance) {
        return null
    }

    return (
        <div className="radarChartPerformance">
            <ResponsiveContainer 
                width="100%" 
                height="100%"
            >
                <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    data={performance}
                    fill="#FFFFFF" 
                    outerRadius="66%"
                    innerRadius="10%"
                    
                >
                    <PolarGrid 
                        outerRadius={1}
                    />
                    <PolarAngleAxis 
                        dataKey="kindName"
                        axisLine={false}   
                        tickLine={false} 
                        tick={{ transform: 'translate(0, 3)' }}
                    />
                    <PolarRadiusAxis 
                        axisLine={false}
                        tick={false}
                    />
                    <Radar 
                        cx="50%" 
                        cy="50%" 
                        dataKey="value"
                        strokeOpacity={0.9} 
                        fill="#FF0101" 
                        fillOpacity={0.5} 
                    />
                    <Text
                        verticalAnchor='middle'
                        textAnchor='middle'
                        tick={{ transform: 'translate(0, 3)' }}
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