import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Footer from '../../components/base/Footer';

export default function Error() {

  return (
    <React.Fragment>
      <CssBaseline/>
      <Typography variant="h3" component="h1" gutterBottom>
      Error
      </Typography>
      <Footer/>
    </React.Fragment>
  );
}
