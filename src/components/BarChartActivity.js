import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
* This component render a barChart with daily activity
* Data come from state Home.js
* We are using the library Rechart.js 
*
* @author Erwan
* @version 1.1
*/



const BarChartActivity = ({ activity }) => {
   
    if(!activity.sessions) {
        return null
    }
    if(!activity.sessions.length){
        return null
    }

    return (
        <div className="barChartActivity">
           <p className="title-graph-barchart">Activité quotidienne</p>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={500}
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
                        dataKey="kilogram"
                        orientation="right" 
                        type="number"
                        domain={["dataMin",'dataMax']} 
                        fill="#9B9EAC" 
                        tickLine={false}
                        tickCount={4}
                        axisLine={false}
                    />
                    <Tooltip />
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
                      
                    />
                    <Bar 
                        name="Calories brûlées (kCal)" 
                        dataKey="calories" 
                        fill="#E60000" 
                        barSize={7} 
                        radius={3} 
                        stackId="a"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartActivity;