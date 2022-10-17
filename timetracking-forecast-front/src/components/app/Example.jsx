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

var data = [
    // {
    //     name: "Page A",
    //     pv: 2400,
    // },
    // {
    //     name: "Page B",
    //     pv: 1398,
    // },
    // {
    //     name: "Page C",
    //     pv: 9800,
    // },
    // {
    //     name: "Page D",
    //     pv: 3908,
    // },
    // {
    //     name: "Page E",
    //     pv: 4800,
    // },
    // {
    //     fecha: "Page F",
    //     horas: 3800,
    // },
    // {
    //     fecha: "Page G",
    //     horas: 4300,
    // }
];


const Example = (props) => {
    const { datos, personName, datosGrafico } = props
    console.log('example datosGrafico',datosGrafico);
    
    // console.log(datos, 'datos en example')
    // console.log(personName,'personName en example')


    // {datos?(
    //     datos.map((dato) => {
    //     console.log('entro en map');
    //     if (dato.name == personName) {
    //         console.log('dentor del if dato.name',dato.name, 'personName',personName);
    //         console.log('horas',dato['horas']);
            
    //         dato['horas'].map((hora) => {
    //             console.log('dentro de map hora',hora);
    //             data.push({'fecha': Object.keys(hora),'horas_h':Object.values(hora) })
    //             console.log('pasada map data',data)
    //         });
    //         console.log('data',data);
    //     };
    // })
    // ):(<div></div>)};
    

    // const dataGraph=[
    //     datos.map((dato) => {
    //         if (dato.name == personName){
    //             {fecha= dato.name.object.keys()}
    //             console.log(fecha,'fecha')
    //         }
    // }
    // )
    //    ]
    
    
         

  return (
    <>
      {datosGrafico? (
        <LineChart
          width={700}
          height={400}
          data={datosGrafico}
          margin={{
              top: 20,
              right: 0,
              left: 80,
              bottom:0
          }}
      >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip contentStyle={{
            fontSize: '14px'
          }} />
          
          <Line
              type="monotone"
              dataKey="horas_h"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              
          />

      </LineChart>
      ):(
        <div>Seleccione datos</div>
      )}
    
      
      </>
      
  )
}

export default Example