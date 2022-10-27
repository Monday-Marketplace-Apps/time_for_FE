import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Footer from '../../components/base/Footer';
import Example from '../../components/app/Example'
import { Grid } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import ComboBoxNombres from '../../components/app/ComboBoxNombres';
import ComboBoxColumna from '../../components/app/ComboBoxColumna';
import ComboBoxPeriodo from '../../components/app/ComboBoxPeriodo';
import BarGraph from '../../components/app/BarGraph';

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

  const [indicesColumnas, setIndicesColumnas] = useState([])

  const [indicesNombres, setIndicesNombres] = useState(null)

  const [ indicesPeriodo, setIndicesPeriodo] = useState(null)
 
  const [datosGrafico, setDatosGrafico] = useState(null);

  

 



  // nombreTipoDato es para select, tipoDato para guardar el nombre seleccionado para la grafica
  const [nombreColumna, setNombreColumna] = useState(null)
  const [columna, setColumna] = useState(null);



// nombre es para select, personname para guardar el nombre seleccionado para la grafica
  const [nombre, setNombre] = useState(null)
  const [personName, setPersonName] = useState(null);


  // nombreTipoDato es para select, tipoDato para guardar el nombre seleccionado para la grafica
  const [nombrePeriodo, setNombrePeriodo] = useState(null)
  const [periodo, setPeriodo] = useState(null);


  useEffect(() => {

    if (nombreColumna === null){
      setColumna(null)
    }
  
  }, [nombreColumna])
  
  // Carga columnas
  useEffect(() => {
    if (datos != null) {
      console.log('useeffect datos', datos)

      if (columna === null) {
        //datos columna
        const listaColumna = []

        datos.map((columna, index) => {

          listaColumna.push({
            'label': Object.keys(columna).toString(),
            'index': index
          });

        });
        console.log('listaColumna', listaColumna)
        setListaColumna(listaColumna)
      }
    }
  }, [datos])


  //datos nombres
  useEffect(() => {
    if (columna != null) {
      const listanombres = []
      console.log('cambio columna')
      
      datos[indicesColumnas][columna].map((nombre,index) => {

        listanombres.push({ 'label': Object.keys(nombre).toString(), 'index':index });
      })
      
      setNombre(null)
      setPeriodo(null)
      setNombrePeriodo(null)
      setListaNombres(listanombres)
    }
  }, [columna])


 // lista periodo
  useEffect(() => {
    if(personName!=null && columna!=null){
      const listaPeriodos = []

      datos[indicesColumnas][columna][indicesNombres][personName][0]['datoreal'].map((tipo, index) => {

        listaPeriodos.push({ 'label': Object.keys(tipo).toString() , 'index': index });
    });

      
    setListaPeriodo(listaPeriodos)
    }
    
  }, [personName])
  
  // grafica
  useEffect(() => {

    if (personName != null && columna != null && periodo!=null  ){

      const graf = []
      datos[indicesColumnas][columna][indicesNombres][personName][0]['datoreal'][indicesPeriodo][periodo].map((dato)=>{
        console.log('dato dentro map useefect dato',dato)
        graf.push({ 'Fecha': Object.keys(dato)[0], 'Horas': Object.values(dato)[0] })
        //console.log('Object.keys(dato)', Object.keys(dato)[0])
      })
      console.log('acceso prediccion', Object.keys(datos[indicesColumnas][columna][indicesNombres][personName][1]['prediccion'][indicesPeriodo]))
      graf.push({ 'Fecha': Object.keys(datos[indicesColumnas][columna][indicesNombres][personName][1]['prediccion'][indicesPeriodo]), 'Predicción': Object.values(datos[indicesColumnas][columna][indicesNombres][personName][1]['prediccion'][indicesPeriodo]) })
      // datos[indicesColumnas][columna][indicesNombres][personName][1]['prediccion'][indicesPeriodo].map((dato) => {
      //   console.log('dato dentro map useefect dato', dato)
      //   graf.push({ 'Fecha': Object.keys(dato)[0], 'Predicción': Object.values(dato)[0] })
      //   console.log('Object.keys(dato)', Object.keys(dato)[0])
      // })
      setDatosGrafico(graf)
    }
  
    
  }, [personName,columna, periodo])

  useEffect(() => {
    setDatosGrafico(null)
    
  }, [columna])
  
  


  return (
    <>
      {/* <div>
        <button onClick={() => { console.log('boton nombre', nombre) }}>A ver q sale en nombre</button>
        <button onClick={() => { console.log('boton personName', personName) }}>A ver q sale en personName</button>

      </div> */}

      {datos ? (
        <React.Fragment>

          <CssBaseline />
          <Typography variant="h3" component="h1" gutterBottom>

            <Grid container columnSpacing={40} >
              <Grid item xs={2} >
                <p></p>

                <ComboBoxColumna setIndicesColumnas={setIndicesColumnas} listaColumna={listaColumna} columna={columna} setColumna={setColumna} setNombreColumna={setNombreColumna} nombreColumna={nombreColumna} indicesColumnas={indicesColumnas} setPersonName={setPersonName} />

              {nombreColumna? (
                <>
                <p></p>
                    <ComboBoxNombres listaNombres={listaNombres} nombre={nombre} setNombre={setNombre} setPersonName={setPersonName} setIndicesNombres={setIndicesNombres} />
                    <p></p>
                    <ComboBoxPeriodo listaPeriodo={listaPeriodo}  setPeriodo={setPeriodo} setNombrePeriodo={setNombrePeriodo} nombrePeriodo={nombrePeriodo} setIndicesPeriodo={setIndicesPeriodo} />
                  </>
              ):(
                <h6> Seleccione columna</h6>
              )}
         
              
                
                
              </Grid>
              <Grid item xs={8}>
                <BarGraph datosGrafico={datosGrafico} />
                {/* <Example datosGrafico={datosGrafico} /> */}
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
