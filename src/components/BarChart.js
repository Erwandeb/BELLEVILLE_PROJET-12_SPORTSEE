import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartActivity = ({ activity }) => {
   
    console.log(activity.sessions)
   
    if(!activity.sessions) {
        return null
    }
    if(!activity.sessions.length){
        return null
    }

    return (
        <div className="barChartActivity">
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
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey=""/>
                    <YAxis dataKey="kilogram" orientation="right" domain={[0, 'dataMax'+10]} fill="#9B9EAC"/>
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} align="right"/>
                    <Bar  name="Poids (kg)" dataKey="kilogram" fill="#282D30" barSize={7}  radius={3} />
                    <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" barSize={7} radius={3} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartActivity;