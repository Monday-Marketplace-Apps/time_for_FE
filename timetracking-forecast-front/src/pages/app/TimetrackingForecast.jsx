import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Footer from '../../components/base/Footer';
import BasicBreadcrumbs from '../../components/app/BasicBreadcrumbs';
import Example from '../../components/app/Example'
import SelectLabels1 from '../../components/app/SelectLabels1';
import SelectLabels2 from '../../components/app/SelectLabels2';
import SelectLabels3 from '../../components/app/SelectLabels3';
import { Grid } from '@mui/material';
import MultipleSelectPlaceholder1 from '../../components/app/PlaceHolder1';
import MultipleSelectPlaceholder2 from '../../components/app/PlaceHolder2';
import MultipleSelectPlaceholder3 from '../../components/app/PlaceHolder3';
import { useState } from 'react';
import { useEffect } from 'react';

export default function TimetrackingForecast() {

  const [datos, setDatos] = useState(null)

  useEffect(()=>{
    if (datos == null) {
      obtainData()
    }
  }, [datos])




  const obtainData = async () => {
    const api = await fetch("http://127.0.0.1:8000/api/");
    const data = await api.json();
    setDatos(data)
  }

  const [personName, setPersonName] = useState([]);

  const [datosGrafico,setDatosGrafico] =useState(null)
  useEffect(()=>{})
  if(personName==null){setDatosGrafico(null)}
  
  const cambiarGrafica=(nombre) => {
    console.log('nombre cambiarGrafica',nombre)
    
    datos.map((dato) => {
      console.log('entro en map cambiar grafica timetra imprimo dato', dato)
      
      if (dato['name'] == nombre){
        const graf=[]
        console.log('entro en if imprimo dato',dato)
        dato['horas'].map((hora) => {
          console.log('dentro de map graf', hora);
          
          graf.push({ 'fecha': Object.keys(hora), 'horas_h': Object.values(hora) })
          console.log('pasada map graf', graf)
        
          console.log('graf fuera map', graf)
          setDatosGrafico(graf)})
        }
    })
    
  }
  console.log('datosGrafico TimeTracking',datosGrafico)

  return (
    <>
      {datos ? (
      <React.Fragment>
      <CssBaseline />
      <Typography variant="h3" component="h1" gutterBottom>

        <Grid container columnSpacing={40} >
          <Grid item xs={2} >
                <MultipleSelectPlaceholder1 datos={datos} personName={personName} setPersonName={setPersonName} cambiarGrafica={cambiarGrafica} datosGrafico={datosGrafico} />
            <MultipleSelectPlaceholder2/>
            <MultipleSelectPlaceholder3/>
            <SelectLabels1/>
            <SelectLabels2/>
            <SelectLabels3 />
            
          </Grid>
          <Grid item xs={8}>
                <Example datosGrafico={datosGrafico} />
          </Grid>
          
        </Grid>
      </Typography>
      <Footer />
    </React.Fragment>
    ):(
      <div>Loading</div>
    )}
    
    </>
  );
}
