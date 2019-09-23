import React from 'react';
import Home from './Components/Settings/Settings';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Router>
      <Route exact path="/" component={ Home } />
    </Router>
   </>
  );
}

export default App;
