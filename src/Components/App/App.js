import React from 'react';
import Settings  from '../Settings';
import Tournament from '../Tournament';

import './App.scss';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

function App( {submitted, champion} ) {
  return (
   <> 
    <div className="my-container">
      { !submitted ? <Settings /> : <Tournament /> }
      <div class="push"></div>
    </div>
   </>
  );
}

export default App;
