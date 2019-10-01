import React from 'react'
import { matchCreater, } from '../../matchCreater';
import '../round.css'

const playerName = (players, playerId) => 
players.find(player => player.name === playerId).name
// we pass in first player item from the rounds array and playerID (stored in player1/player2 key) of the player clicked on, if the player id matches the playerId of the player object, we return the players.name


export const Match = ({ round, key, players, rounds, reset, submitWinners, selectWinner, winners }) =>{
console.log(players)
	return (
	<>
        { matchCreater(round).map(match => // maps through the matches created by the matchCreater 
        <>

            <li key={ key } className={ `list-group-item text-center mb-3 p-5 }`}>
                <span id="playerBox" className={ `border p-3 m-3 list-group-item-${winners.find(player => player === match.player1) ? "success disableEvent" : "primary"} `} onClick={() => selectWinner(match.roundId, match.player1)}>
                {playerName(round, match.player1)}</span>

                <p className="text-center m-4"> vs </p>
                
                <span id="playerBox" className={ `border p-3 m-3 list-group-item-${winners.find(player => player === match.player2) ? "success disableEvent" : "primary"} `} onClick={() => selectWinner(match.roundId, match.player2)}>{playerName(round, match.player2)}</span>
            </li>

        </>
        )}
	</>
	)
}

	
//On click of a player box, the playerName function checks if the player in the rounds array (all players) has the same matchId