import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router";
import AppRoutes from './utils/routes';
import { publicRoutesData, privateRoutesData } from './utils/all-routes';

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;