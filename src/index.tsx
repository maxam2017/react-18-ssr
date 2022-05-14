import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
);
