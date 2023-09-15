import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GeneralRoutes from './config/Routes';
function App() {

  return (
      <BrowserRouter>
      <Routes>
        {GeneralRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
                <route.component />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
