import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Footer from '../../components/base/Footer';

export default function Introduction() {

  return (
    <React.Fragment>
        <CssBaseline/>
        <Typography variant="h3" component="h1" gutterBottom>
          Introduction
        </Typography>
        <Footer/>
      </React.Fragment>
  );
}
