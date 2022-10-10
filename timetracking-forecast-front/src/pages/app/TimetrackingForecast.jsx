import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Footer from '../../components/base/Footer';
import BasicBreadcrumbs from '../../components/app/BasicBreadcrumbs';
import PureComponent from '../../components/app/Example'

export default function TimetrackingForecast() {

  return (
    <React.Fragment>
      <CssBaseline/>
      <Typography variant="h3" component="h1" gutterBottom>
      <BasicBreadcrumbs />
        <PureComponent />
      </Typography>
      <Footer/>
    </React.Fragment>
  );
}
