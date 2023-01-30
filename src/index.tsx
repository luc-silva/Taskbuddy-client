import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AppHeader } from './components/AppHeader/AppHeader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppHeader />
    <App />
  </React.StrictMode>
);