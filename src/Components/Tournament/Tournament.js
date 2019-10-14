import React from 'react';
import './tournament.scss';
import Header from '../Header/Header';
import Round from '../Round';
import Champion from '../Champion';


let Tournament = ( {champion}) => {
  

    return (
        <div className="fluid-container">
          
          <Header />
                <div className="row m-0">
                    { champion !== null ? <Champion /> : <Round /> }  
                </div>
        </div>
    )
}
             
            
export default Tournament;