import React from 'react';
import Routes from './Routes';
import './globalStyles/global.css';

import history from './utils/history/history'
import { AuthProvider } from './AuthContext/AuthContext';
import { Router } from 'react-router';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
