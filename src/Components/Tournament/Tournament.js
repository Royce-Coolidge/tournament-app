import React from 'react';
import './tournament.scss';
//import Match from "../Match";



let Tournament = ({ players }) => {

    //let round_1 = players.filter(player => player.roundId === 1);
    let round_2 = players.filter(player => player.roundId === 2);
    let round_3 = players.filter(player => player.roundId === 3);

    //let match_1 = players.filter(player => player.matchId === 1)
    //let match_2 = players.filter(player => player.matchId === 2)
    
    // for (let i = 0; players.length > i; i += 1) {
    //     let current = players[i];
    //     let next  = players[i + 1];
    //     if( current.matchId === next.matchid) {
    //         return (
    //                 <Match
    //                 player1={current}
    //                 player2={next}
    //                 />    ) 
    //         }
    // }


    
    var player = {}
    var acc = function (accumulator, next) {
        
        accumulator[next.matchId] = {players:[]};

        return accumulator;
    }


    const matches = players.reduce((acc, player) =>{}, {};
    console.log(matches)

    
    

    return (
            <div className="fluid-container">
                <h1>Tournament</h1>
                    <div className="row">

                    {/* ROUND 1 COLUMN */}
                        <div className="col-sm">
                            <h1>First Round</h1>
                                
                    
                        </div>
                        
                    {/* ROUND 2 COLUMN */}
                        <div className="col-sm">
                            <h1>Semi-Finals</h1>
                            <ul className="list-group">
                                {round_2.map((player, index) =>
                                    <li className="list-group-item"  key={ index }>
                                        { player.name }
                                    </li>
                                )}
                            </ul>
                        </div>

                     {/* ROUND 3 COLUMN */}
                        <div className="col-sm">
                            <h1>Finals</h1>
                            <ul className="list-group">
                                {round_3.map((player, index) =>
                                    <li className="list-group-item" key={ index }>
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