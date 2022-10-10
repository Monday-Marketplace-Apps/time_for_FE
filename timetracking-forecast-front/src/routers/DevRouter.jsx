import React from 'react';
import {Routes, Route} from 'react-router-dom';

import DevDashboard from '../components/dev/DevDashboard';

import Introduction from '../pages/dev/Introduction';
import Installation from '../pages/dev/Installation';
import HowToUse from '../pages/dev/HowToUse';
import Pricing from '../pages/dev/Pricing';
import Privacy from '../pages/dev/Privacy';
import Support from '../pages/dev/Support';
import TermsOfService from '../pages/dev/TermsOfService';
import CookiePolicy from '../pages/dev/CookiePolicy'


function DevRouter() {
  return (
    <React.Fragment>

        <DevDashboard page = {
            <Routes>
                <Route path='introduction' element={<Introduction />} />
                <Route path='installation' element={<Installation />} />
                <Route path='howtouse' element={<HowToUse />} />
                <Route path='pricing' element={<Pricing />} />
                <Route path='privacy' element={<Privacy />} />
                <Route path='support' element={<Support />} />
                <Route path='termsofservice' element={<TermsOfService />} />
                <Route path='cookiepolicy' element={<CookiePolicy />} />
            </Routes>
        }>
        </DevDashboard>   
    </React.Fragment>
  );
}

export default DevRouter;