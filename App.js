import React from 'react'
import {Router } from 'react-router-dom';
import Routes from './Routes';
import history from './history';

function App() {
  return (
   <Router>
     <Routes history={history} />
    </Router>
  );
}

export default App;
