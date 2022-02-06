import React from "react";
import { AreaChart, Area, YAxis, XAxis, ResponsiveContainer,  } from 'recharts';

class AreaRechartComponent extends React.Component {

    data = [
        {
            "name": "6:00 am",
            "Temperature": 0,
            
        },
        {
            "name": "10:00 am",
            "Temperature": 4,
            
        },
        {
            "name": "12:00 md",
            "Temperature": 5,
          
           
        },
        {
            "name": "6:00 pm",
            "Temperature": 3,
            
        },
        {
            "name": "10:00 pm",
            "Temperature": 0,
            
        }
    ]

    render() {
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={730} height={250} data={this.data}
                margin={{ top: 50, right: 10, left: 0, bottom: 30 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.7} />
                        <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
                    </linearGradient>     
              </defs>
                <XAxis stroke="#FFFFFF" dataKey="name" />
                <YAxis stroke="#FFFFFF" dataKey="Temperature" />
               
                
             
                <Area type="monotone" dataKey="Temperature"  stroke="FFFFFF" fillOpacity={1} fill="url(#colorUv)" />
     
            </AreaChart>
            </ResponsiveContainer>
        )
    };
}

export default AreaRechartComponent;