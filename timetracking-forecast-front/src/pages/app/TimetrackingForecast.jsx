import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Footer from '../../components/base/Footer';
import BasicBreadcrumbs from '../../components/app/BasicBreadcrumbs';
import Example from '../../components/app/Example'
import SelectLabels1 from '../../components/app/SelectLabels1';
import SelectLabels2 from '../../components/app/SelectLabels2';
import SelectLabels3 from '../../components/app/SelectLabels3';

export default function TimetrackingForecast() {
  

  return (
    <React.Fragment>
      <CssBaseline/>
      <Typography variant="h3" component="h1" gutterBottom>
        
      
      <SelectLabels1/>
      <SelectLabels2/>
      <SelectLabels3/>
        <Example />
      </Typography>
      <Footer/>
    </React.Fragment>
  );
}
