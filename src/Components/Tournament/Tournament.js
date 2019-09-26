import React from 'react';
import './tournament.scss';
//import Match from "../Match";



let Tournament = ({ players }) => {

    let round_1 = players.filter(player => player.roundId === 1);
    let round_2 = players.filter(player => player.roundId === 2);
    let round_3 = players.filter(player => player.roundId === 3);
    

    return (
            <div className="fluid-container">
                <h1>Tournament</h1>
                    <div className="row">

                    {/* ROUND 1 COLUMN */}
                        <div className="col-sm">
                            <h1>Round 1</h1>
                            <ul>
                                {round_1.map((player, index) =>
                                    <li key={ index }>
                                        { player.name }
                                    </li>
                                )}
                            </ul>
                        </div>
                    
                    {/* ROUND 2 COLUMN */}
                        <div className="col-sm">
                            <h1>Semi-Finals</h1>
                            <ul>
                                {round_2.map((player, index) =>
                                    <li key={ index }>
                                        { player.name }
                                    </li>
                                )}
                            </ul>
                        </div>
                        
                     {/* ROUND 3 COLUMN */}
                        <div className="col-sm">
                            <h1>Finals</h1>
                            <ul>
                                {round_3.map((player, index) =>
                                    <li key={ index }>
                                        { player.name }
                                    </li>
                                )}
                            </ul>
                        </div>
                </div>  
            </div>                                 
       
    )
}
             
            
export default Tournament;