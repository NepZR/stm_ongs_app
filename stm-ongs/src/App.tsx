import React from 'react';
import Routes from './Routes';
import './styles/global.css';

import history from './history/history'
import { AuthProvider } from './Context/AuthContext';
import { Router } from 'react-router';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes/>
      </Router>
    </AuthProvider>
  );
}

export default App;
