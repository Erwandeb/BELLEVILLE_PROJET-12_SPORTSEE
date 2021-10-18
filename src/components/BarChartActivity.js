import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
* This component render a barChart with daily activity
* Data come from state Home.js
* We are using the library Rechart.js 
*
* @author Erwan
* @version 1.1
*/



const BarChartActivity = ({ activity }) => {
   
    // if "undefined" error
    if(!activity.sessions) {
        return null
    }
    if(!activity.sessions.length){
        return null
    }

    let tooltip;
    const CustomTooltip = ({ active, payload }) => {
        if (!active || !tooltip){
            return null
        }   
        for (const bar of payload){
            if (bar.dataKey === tooltip)
                return <div className="tooltip-barchart">{bar.value}</div>
        return null
        };
    };


    return (
        <div className="barChartActivity">
           <p className="title-graph-barchart">Activité quotidienne</p>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={activity.sessions}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                    />
                    <XAxis 
                        dataKey=""
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis 
                        dataKey="calories"
                        orientation="right" 
                        type="number"
                        domain={[0,'dataMax + 50']} 
                        fill="#9B9EAC" 
                        tickLine={false}
                        tickCount={4}
                        axisLine={false}
                    />
                    <Tooltip 
                        content={<CustomTooltip/>}
                        viewBox= {{ x: 30, y: 30, width: 600, height: 600 }}
                    />
                    <Legend 
                        verticalAlign="top"
                        height={36} 
                        align="right"
                        iconType="circle"
                    />
                    <Bar  
                        name="Poids (kg)" 
                        dataKey="kilogram" 
                        fill="#282D30" 
                        barSize={7}  
                        radius={3} 
                        stackId="b"
                        minPointSize={10}
                        onMouseOver={ () => tooltip="kilogram" }
                    />
                    <Bar 
                        name="Calories brûlées (kCal)" 
                        dataKey="calories" 
                        fill="#E60000" 
                        barSize={7} 
                        radius={3} 
                        stackId="a"
                        maxBarSize={80}
                        onMouseOver={ () => tooltip="calories" }
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};


// Prop-types verification
BarChartActivity.propTypes = {
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
    maxBarSize:PropTypes.number,
    barSize:PropTypes.number,
    radius:PropTypes.number,
    tickCount:PropTypes.number,
    orientation:PropTypes.string,
    verticalAlign:PropTypes.number,
    height:PropTypes.number,
    align:PropTypes.number,
    iconType:PropTypes.number,
    stackId:PropTypes.string,
}

export default BarChartActivity;