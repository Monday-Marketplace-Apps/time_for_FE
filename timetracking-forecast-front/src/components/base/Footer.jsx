import React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright(){
    return (
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
        {'Copyright © '}
        <Link color="inherit" href="https://cartagon.com/" target="_blank">
        www.cartagon.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default function Footer() {
return <Copyright />;
}