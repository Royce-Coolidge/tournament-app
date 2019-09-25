import React from 'react';
import './tournament.scss';
//import Player from "../Player/";


  
export const Tournament = ( {players}) => {

    return (
        <div className="tournament_container">
            <h1>First Round Matches</h1>
                <div className="grid_4_player">
                    <div className="col">
                        <div>
                            <p>{ players[0] }</p>
                            <p>{ players[1]}</p>
                            <p>{ players[2]}</p>
                            <p>{ players[3]}</p>
                        </div>
                    </div>
                    <div className="round_2">
                        <div>Winner 1</div>
                        <div>Winner 2</div>
                    </div>
            </div>
           
        </div>
    );


}

export default Tournament;