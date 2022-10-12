import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Page A",
        pv: 2400,
    },
    {
        name: "Page B",
        pv: 1398,
    },
    {
        name: "Page C",
        pv: 9800,
    },
    {
        name: "Page D",
        pv: 3908,
    },
    {
        name: "Page E",
        pv: 4800,
    },
    {
        name: "Page F",
        pv: 3800,
    },
    {
        name: "Page G",
        pv: 4300,
    }
];

const Example = () => {
  return (
    
      <LineChart
          width={700}
          height={400}
          data={data}
          margin={{
              top: 20,
              right: 0,
              left: 80,
              bottom:0
          }}
      >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{
            fontSize: '14px'
          }} />
          
          <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              
          />

      </LineChart>
      
  )
}

export default Example