import React from 'react';
import {Routes, Route} from 'react-router-dom';

import AppDashboard from '../components/app/AppDashboard';

import TimetrackingForecast from '../pages/app/TimetrackingForecast';
import Plans from '../pages/app/Plans';
import Error from '../pages/app/Error';

function AppRouter() {
  return (
    <React.Fragment>

        <AppDashboard page = {
            <Routes>
                <Route path='' element={<TimetrackingForecast />} />
                <Route path='plans' element={<Plans />} />
                <Route path='error' element={<Error />} />
            </Routes>
        }>
        </AppDashboard>   
    </React.Fragment>
  );
}

export default AppRouter;