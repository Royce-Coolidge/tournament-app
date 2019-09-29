import React from 'react';
import './tournament.scss';
import Match from "../Match";



let Tournament = ({ players }) => {

    //let round_1 = players.filter(player => player.roundId === 1);
    let round_2 = players.filter(player => player.roundId === 2);
    let round_3 = players.filter(player => player.roundId === 3);

    //let match_1 = players.filter(player => player.matchId === 1)
    //let match_2 = players.filter(player => player.matchId === 2)



    const matches = players.reduce((prev, next) => {
        if (prev[next.matchId] === prev[prev.matchId]){ // if matchId of player is the same as another player's 
            prev[next.matchId] = {players:[]} // create match object with empty players
        }
        prev[next.matchId].players.push(next.name)
        return prev
    },{})

    console.log(matches)

   

 

    return (
            <div className="fluid-container">
                <h1>Tournament</h1>
                    <div className="row">

                    {/* ROUND 1 COLUMN */}
                        <div className="col-sm">
                            <h1>First Round</h1>
                                {/* {
                                    <Match 
                                        player1={ matches.players }
                                        player2={ matches.players }
                                    />
                                }  */}


                    
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