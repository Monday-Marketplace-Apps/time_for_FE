import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Footer from '../../components/base/Footer';
import BasicBreadcrumbs from '../../components/app/BasicBreadcrumbs';
import Example from '../../components/app/Example'
import SelectLabels1 from '../../components/app/SelectLabels1';
import SelectLabels2 from '../../components/app/SelectLabels2';
import SelectLabels3 from '../../components/app/SelectLabels3';
import { Button, Grid } from '@mui/material';
import MultipleSelectPlaceholder1 from '../../components/app/PlaceHolder1';
import MultipleSelectPlaceholder2 from '../../components/app/PlaceHolder2';
import MultipleSelectPlaceholder3 from '../../components/app/PlaceHolder3';
import { useState } from 'react';
import { useEffect } from 'react';
import ComboBoxNombres from '../../components/app/ComboBoxNombres';
import ComboBoxColumna from '../../components/app/ComboBoxColumna';
import ComboBoxPeriodo from '../../components/app/ComboBoxPeriodo';

export default function TimetrackingForecast() {

  const [datos, setDatos] = useState(null)

  useEffect(() => {
    if (datos == null) {
      obtainData()
    }
  }, [datos])

  const obtainData = async () => {
    const api = await fetch("http://127.0.0.1:8000/api/");
    const data = await api.json();
    setDatos(data)
  }

  // listaNombres valores de seleccion en select formatto label:nombre
  const [listaNombres, setListaNombres] = useState([])

  // listaColumna valores de seleccion en select formato label:columna
  const [listaColumna, setListaColumna] = useState([])
  // listaPeriodo valores de seleccion en select formato label:periodo
  const [listaPeriodo, setListaPeriodo] = useState([])
 
  const [datosGrafico, setDatosGrafico] = useState(null);

  useEffect(() => {
    if (datos != null) {
      console.log('useeffect datos', datos)
      const listanombres = []
      const listaColumna=[]
      const listaPeriodos=[]
      

      //datos nombres
      datos[0]['columna1'].map((dato) => {

        console.log('datos map useeffect', dato)
        listanombres.push({ 'label': Object.keys(dato).toString() });
      });

      //datos columna
      console.log('Columna datos[0][columna1][0][ruben][datoreal]', datos)
      
      datos.map((columna) => {

        console.log('tipo map useeffect', columna)
        listaColumna.push({ 'label': Object.keys(columna).toString() });
      });

      //datos periodo
      console.log('Periodo datos[0][columna1][0][ruben][datoreal]', datos[0]['columna1'][0]['ruben'][0]['datoreal'])

      datos[0]['columna1'][0]['ruben'][0]['datoreal'].map((tipo) => {

        console.log('Periodo dentro map', tipo)
        listaPeriodos.push({ 'label': Object.keys(tipo).toString() });
      });
      setListaNombres(listanombres)
      setListaColumna(listaColumna)
      setListaPeriodo(listaPeriodos)
    }
  }, [datos])
  console.log('listaNombres', listaNombres)
  console.log('listaColumna', listaColumna)




// nombre es para select, personname para guardar el nombre seleccionado para la grafica
  const [nombre, setNombre] = useState(null)
  const [personName, setPersonName] = useState(null);


// nombreTipoDato es para select, tipoDato para guardar el nombre seleccionado para la grafica
  const [nombreColumna, setNombreColumna] = useState(null)
  const [columna, setColumna] = useState(null);

  // nombreTipoDato es para select, tipoDato para guardar el nombre seleccionado para la grafica
  const [nombrePeriodo, setNombrePeriodo] = useState(null)
  const [periodo, setPeriodo] = useState(null);

  

  const [frecuencia, setFrecuencia] = useState(null);






 



  return (
    <>
      <div>
        <button onClick={() => { console.log('boton nombre', nombre) }}>A ver q sale en nombre</button>
        <button onClick={() => { console.log('boton personName', personName) }}>A ver q sale en personName</button>

      </div>

      {datos ? (
        <React.Fragment>

          <CssBaseline />
          <Typography variant="h3" component="h1" gutterBottom>

            <Grid container columnSpacing={40} >
              <Grid item xs={2} >

                {/* <MultipleSelectPlaceholder1 datos={datos} personName={personName} setPersonName={setPersonName} cambiarGrafica={cambiarGrafica} datosGrafico={datosGrafico} />
            <MultipleSelectPlaceholder2/>
            <MultipleSelectPlaceholder3/> */}
                {/* <SelectLabels1 datos={datos}  personName={personName} setPersonName={setPersonName} cambiarGrafica={cambiarGrafica} datosGrafico={datosGrafico} />
            <SelectLabels2/>
            <SelectLabels3 /> */}
                <ComboBoxNombres listaNombres={listaNombres} nombre={nombre} setNombre={setNombre} setPersonName={setPersonName} />
                <ComboBoxColumna listaColumna={listaColumna} columna={columna} setColumna={setColumna} setNombreColumna={setNombreColumna} nombreColumna={nombreColumna} />
                <ComboBoxPeriodo listaPeriodo={listaPeriodo} periodo={periodo} setPeriodo={setPeriodo} setNombrePeriodo={setNombrePeriodo} nombrePeriodo={nombrePeriodo} />
              </Grid>
              <Grid item xs={8}>
                <Example datosGrafico={datosGrafico} />
              </Grid>

            </Grid>
          </Typography>
          <Footer />
        </React.Fragment>
      ) : (
        <div>Loading</div>
      )}

    </>
  );
}
