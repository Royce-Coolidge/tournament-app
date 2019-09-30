import React from 'react'
import { matchCreater, } from '../matchCreater';
import './round.css'

const playerName = (players, playerId) => 
players.find(player => player.name === playerId).name
// we pass in first player item from the rounds array and playerID (stored in player1/player2 key) of the player clicked on, if the player id matches the playerId of the player object, we return the players.name


export const Round = ({ players, rounds, reset, submitWinners, numOfPlayers, selectWinner, winners }) =>{

	return (
	<>
			{ rounds.map((round, index) =>
				<div className="d-flex align-items-center flex-column jumbotron">
					<h1 className="text-left align-self-center pl-2 headerFont">Round {index + 1}</h1>
					<ul className="m-2 p-0">
						{ matchCreater(round).map(match => // maps through the matches created by the matchCreater 
						<>
							<li key={ index } className={ `list-group-item text-center mb-3 p-5 }`}>
								<span id="playerBox" className={ `border p-3 m-3 list-group-item-${winners.find(player => player === match.player1) ? "success disableEvent" : "primary"} `} onClick={() => selectWinner(match.player1)}>
								{playerName(round, match.player1)}</span>

								<p className="text-center m-4"> vs </p>
								
								<span id="playerBox" className={ `border p-3 m-3 list-group-item-${winners.find(player => player === match.player2) ? "success disableEvent" : "primary"} `} onClick={() => selectWinner(match.player2)}>{playerName(round, match.player2)}</span>
							</li>
						</>
						)}
					</ul>
					<p> Click on the player to progress to the next round </p>
					<button className={ `btn btn-danger rounde-pill `} onClick={ submitWinners }>Submit Winners</button>
					<br></br>
					<button className="btn btn-primary rounded-pill" onClick={ reset }>reset</button>
				</div>
			)}
	</>
	)
}

	
//On click of a player box, the playerName function checks if the player in the rounds array (all players) has the same matchId