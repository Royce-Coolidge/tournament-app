import React from 'react';
import { Settings } from './Components/Settings/';
import { Tournament } from './Components/Tournament/';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Router>
      <Route exact path="/" component={ Settings } />
      <Route exact path="/tournament" component={ Tournament } />
    </Router>
   </>
  );
}

export default App;
