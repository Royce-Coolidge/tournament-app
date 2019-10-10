import React from 'react';
import Settings  from '../Settings';
import Tournament from '../Tournament';

import './App.scss';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

function App( {submitted, champion} ) {
  return (
   <>
    { !submitted ? <Settings /> : <Tournament /> }

   </>
  );
}

export default App;
