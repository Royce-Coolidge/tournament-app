import React from 'react'
import { matchCreater } from '../matchCreater';

const playerName = (players, playerId) => players.find(player => player.id === playerId).name 
// we pass in the rounds array and playerID of each player in the match, if the player id matche



export const Round = ({ rounds, createTournament, addPlayer, reset }) =>
	<>
			{ rounds.map((round, index) =>
				<div>
					<h1>Round {index + 1}</h1>
					<ul>
						{ matchCreater(round).map(match =>
						<>
							<li key={ index } className="list-group-item text-center mb-3">
								<span id="playerBox" className="border border-dark p-2" onClick={() => addPlayer(playerName(round, match.player1))}>{playerName(round, match.player1)}</span>
								
								<p className="text-center"> vs </p>
								
								<span id="playerBox" className="border border-dark p-2" onClick={() => addPlayer(playerName(round, match.player2))}>{playerName(round, match.player2)}</span>
							</li>
						</>
						)}
					</ul>
					<button onClick={ createTournament }>Submit Winners</button>
					<button onClick={ reset }>reset</button>
				</div>
			)}
	</>

	
//On click of a player box, the playerName function checks if the player in the rounds array (all players) has the same matchId