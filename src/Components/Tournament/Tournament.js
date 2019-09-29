import React from 'react';
import './tournament.scss';
import Header from '../Header/Header';
import Round from './Round/';


let Tournament = () => {
    return (
        <div className="fluid-container">
          <Header />
                <div className="row m-0">
                  <Round />
                    
                </div>
        </div>
    )
}
             
            
export default Tournament;