import React from 'react';
import {Route, Routes} from 'react-router-dom';

import routes from './AuthRoute';

function RouterProvider() {
  return (
    <Routes>
      {routes.map((route, index) => 
        <Route path={route.path} element={route.component} key={index}/>
        )}
    </Routes>
  )
}

export default RouterProvider;