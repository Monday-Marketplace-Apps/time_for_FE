import "./styles.css";
import React from "react";
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter
} from "recharts";

const data = [
    {
        name: "Page A",
        uv: 590,
        pv: 800,
        amt: 1400,
        cnt: 490
    },
    {
        name: "Page B",
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590
    },
    {
        name: "Page C",
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350
    },
    {
        name: "Page D",
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480
    },
    {
        name: "Page E",
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460
    },
    {
        name: "Page F",
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380
    }
];

export default function Composed(props) {
    const { datosGrafico } = props
    return (
        <ComposedChart
            width={800}
            height={450}
            data={datosGrafico}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="Fecha" tick={{ fontSize: 12 }} angle={-65} textAnchor="end" height={110} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={{
                fontSize: '14px'
            }} />
            <Legend iconSize={5} wrapperStyle={{ fontSize: "15px" }} verticalAlign='top' />
            {/* <Area type="monotone" dataKey="Horas" fill="#3f84d3" stroke="#413ea0" /> */}
            <Bar dataKey="Horas" stackId="a" fill="#3f84d3" />
            <Bar dataKey="Predicción" barSize={200} fill="#cf6666" stackId="a" unit=' Horas' name='Prediccion' />
            <Line type="monotone" dataKey="Horas" stroke="#ff7300" />
        </ComposedChart>
    );
}