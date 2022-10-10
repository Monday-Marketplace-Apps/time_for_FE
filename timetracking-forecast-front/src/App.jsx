import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import AppRouter from '../src/routers/AppRouter'
import DevRouter from '../src/routers/DevRouter'

function AppF() {
 
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='app/*' element={<AppRouter />} />
          <Route path='dev/*' element={<DevRouter />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default function App() {
  return(
    <React.Fragment>
      <AppF />
    </React.Fragment>
  );
}