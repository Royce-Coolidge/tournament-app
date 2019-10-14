import React from 'react'
import './round.css'
import Match  from '../Match';


export const Round = ({ totalRounds, rounds, reset, submitWinners }) =>{

	return (
	<>
			{ rounds.map((round, index) =>
				<div className="d-flex align-items-center flex-column jumbotron">
					<h1 className="text-left align-self-center pl-2 headerFont">
						
						 { (index + 1) === totalRounds ? "Final" : `Round: ${(index + 1)}` }</h1>

					<ul className="m-2 p-0">
						<Match 
						key={ index }
						round={ round }
						/>
					</ul>

					<p> Click on the player to progress to the next round </p>

					<button 
						className={ `btn btn-danger rounde-pill `} 
						onClick={ submitWinners }>
						{ (index + 1) === totalRounds ? `Select the Champion` : `Progress to Round ${(index + 2)}` }</button>
					<br></br>
					<button className="btn btn-primary rounded-pill" onClick={ reset }>reset</button>
				</div>
			)}
	</>
	)
}

	
//On click of a player box, the playerName function checks if the player in the rounds array (all players) has the same matchId