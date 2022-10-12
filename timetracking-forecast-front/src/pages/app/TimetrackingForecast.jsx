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

  const [data, setData] = useState(null)

  useEffect(()=>{
    if (data == null) {
      obtainData()
    }
  },[data])

  const obtainData = async () => {
    const api = await fetch("http://127.0.0.1:8000/api/");
    const data = await api.json();
    setData(data)
  }
  console.log(data)

  

  return (
    <>
    {data ? (
      <React.Fragment>
      <CssBaseline />
      <Typography variant="h3" component="h1" gutterBottom>

        <Grid container columnSpacing={40} >
          <Grid item xs={2} >
            <MultipleSelectPlaceholder1 data={data}/>
            <MultipleSelectPlaceholder2/>
            <MultipleSelectPlaceholder3/>
            <SelectLabels1/>
            <SelectLabels2/>
            <SelectLabels3 />
            
          </Grid>
          <Grid item xs={8}>
            <Example />
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
