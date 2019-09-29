import React from 'react'
import { matchCreater } from '../matchCreater';
import './round.css'

const playerName = (players, playerId) => 
players.find(player => player.id === playerId).name
// we pass in a player from the rounds array and playerID of each player in the match, if the player id matches




export const Round = ({ rounds, addPlayer, reset, submitWinners, players, numOfPlayers }) =>
	<>
			{ rounds.map((round, index) =>
				<div className="d-flex align-items-center flex-column">
					<h1 className="text-left align-self-start pl-2 headerFont">Round {index + 1}</h1>
					<ul className="m-2 p-0">
						{ matchCreater(round).map(match =>
						<>
							<li key={ index } className="list-group-item text-center mb-3 p-5" >
								<span 
								id="playerBox" 
								className={ `border border-dark p-3 m-3 ${ numOfPlayers > 100 ? 'disableEvent': null}`} 
								onClick={() => addPlayer(playerName(round, match.player1))}>
								{playerName(round, match.player1)}</span>
								<p className="text-center m-4"> vs </p>
								
								<span id="playerBox" className="border border-dark p-3" onClick={() => addPlayer(playerName(round, match.player2))}>{playerName(round, match.player2)}</span>
							</li>
						</>
						)}
					</ul>

					<button className="btn btn-danger rounde-pill" onClick={ submitWinners }>Submit Winners</button>
					<br></br>
					<button className="btn btn-primary rounde-pill" onClick={ reset }>reset</button>
				</div>
			)}
	</>

	
//On click of a player box, the playerName function checks if the player in the rounds array (all players) has the same matchId