import "./styles.css";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

export default function BarGraph(props) {
    const { datosGrafico } = props
    return (
        <BarChart
            width={800}
            height={450}
            data={datosGrafico}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Fecha" tick={{ fontSize: 12 }} angle={-65} textAnchor="end" height={110} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={{
                fontSize: '14px'
            }} />
            <Legend iconSize={5} wrapperStyle={{ fontSize: "15px" }}  verticalAlign='top' />
            <Bar dataKey="Horas" stackId="a" fill="#3f84d3" />
            <Bar dataKey="Predicción" stackId="a" fill="#cf6666" unit=' Horas'  name='Prediccion' />

        </BarChart>
    );
}
