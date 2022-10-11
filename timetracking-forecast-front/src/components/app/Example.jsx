
import { Container } from "@mui/system";
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
    <Container fixed>
      <LineChart
          width={900}
          height={600}
          data={data}
          margin={{
              top: 100,
              right: 0,
              left: 80,
              bottom: 25
          }}
      >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
          <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
          />

      </LineChart>
      </Container>
  )
}

export default Example