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

    
    /*
    const CustomIcon = () => {
        if(average.sessions.day === 1){
            return console.log("coucou")
        }
    }
    */
    
  

    
    /*
    function numberIntoDay(){
        let number = average.sessions;
        let dayWeek = ["L","M", "M", "J", "V","S","D"];
        number.map((day)=>(
            number
        ))
    }
    */
    
  
   
    
console.log("average.session",average.sessions)

    return (
        
        <div className="averageSession">
            <p className="title-graph">Durée moyenne des sessions</p>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                    width={258}
                    height={263} 
                    data={average.sessions}
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
                        activeDot={false}
                        strokeDashArray="4 1 2"
                        fill="url(#color)"
                        opacity={0.70}
                        
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