import React from 'react';
import './tournament.scss';
import {matchAdapter, roundAdapter} from "./adapters";

const playerName = (players, playerId) => players.find(player => player.id === playerId).name // finds player name from list of players and player id

let Tournament = ({ rounds, addPlayer, createTournament }) => {

    return (
        <div className="fluid-container">
            <h1>Tournament</h1>
                <div className="row">
                    <h2>Matches</h2>
                  {rounds.map((round, index) =>
                    <div>
                      <h1>Round {index + 1}</h1>
                        <ul>{
                          matchAdapter(round).map(match =>
                            <li>
                              <span onClick={() => addPlayer(playerName(round, match.player1))}>{playerName(round, match.player1)}</span> vs <span onClick={() => addPlayer(playerName(round, match.player2))}>{playerName(round, match.player2)}</span>
                            </li>
                          )
                        }
                        </ul>
                      <button onClick={ createTournament } >Submit Winners</button>
                    </div>
                  )}
            </div>
        </div>
    )
}
             
            
export default Tournament;