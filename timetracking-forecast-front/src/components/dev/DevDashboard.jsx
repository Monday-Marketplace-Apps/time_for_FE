import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import InfoIcon from '@mui/icons-material/Info';
import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import MouseIcon from '@mui/icons-material/Mouse';
import EuroIcon from '@mui/icons-material/Euro';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import HelpIcon from '@mui/icons-material/Help';
import GavelIcon from '@mui/icons-material/Gavel';
import CookieIcon from '@mui/icons-material/Cookie';

import CartagonLogo from '../../img/Cartagon_logo_light.png'

const drawerWidth = 240;

function DashboardContent(props) {

  const {page} = props  

  const navigate = useNavigate();

  const drawer_list = [
    {
      title: "Introduction",
      path: "/dev/introduction",
      icon: <InfoIcon/>
    },
    {
      title: "Installation",
      path: "/dev/installation",
      icon: <InstallDesktopIcon/>
    },
    {
      title: "How to use",
      path: "/dev/howtouse",
      icon: <MouseIcon/>
    },
    {
      title: "Pricing",
      path: "/dev/pricing",
      icon: <EuroIcon/>
    },
    {
      title: "Privacy",
      path: "/dev/privacy",
      icon: <PrivacyTipIcon/>
    },
    {
      title: "Support",
      path: "/dev/support",
      icon: <HelpIcon/>
    },
    {
      title: "Terms Of Service",
      path: "/dev/termsofservice",
      icon: <GavelIcon/>
    },    
    {
      title: "Cookie Policy",
      path: "/dev/cookiepolicy",
      icon: <CookieIcon/>
    }
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed"
      color="default"
      elevation={1}
      sx={{ p:2, 
            zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <img src={CartagonLogo} alt=""/>
          <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1, marginLeft: '.7rem' }}>
            Subitems Timetracking App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar sx={{ p:7,
            zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          {/* <img src={CartagonLogo} alt=""/>
          <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1, marginLeft: '.7rem' }}>
            User Substitution App
          </Typography> */}
        </Toolbar>
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {drawer_list.map((index) => (
              <ListItem button
              onClick={()=>navigate(index.path)}
              key={index.title}>
                <ListItemIcon>
                  {index.icon}
                </ListItemIcon>
                <ListItemText primary={index.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
              {page}
            </Container>
          </Box> 
        </Box>
    </Box>
  );
}

export default function DevDashboard(props) {
  return <DashboardContent {...props}/>;
}