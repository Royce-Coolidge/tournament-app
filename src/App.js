import React from 'react';
import HomePage from './Components/HomePage/HomePage';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Router>
      <Route exact path="/" component={ HomePage } />
    </Router>
   </>
  );
}

export default App;
