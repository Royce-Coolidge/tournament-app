import React from 'react';
import Settings from './Components/Settings/';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Router>
      <Route exact path="/" component={ Settings } />
    </Router>
   </>
  );
}

export default App;
