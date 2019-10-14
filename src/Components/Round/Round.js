import React from 'react'
import './round.css'
import Match  from '../Match';
import { matchCreater } from '../../matchCreater';


export const Round = ({ totalRounds, rounds, reset, submitWinners }) =>{

	return (
	<>
			{ rounds.map((round, index) =>
				<div className="d-flex align-items-center flex-column">
					<h1 className="text-left align-self-center pl-2 headerFont">
						 { (index + 1) === totalRounds ? "Final" : `Round: ${(index + 1)}` }
					</h1>
				
					<ul className="m-2 p-0">
						{ matchCreater(round).map(match => // maps through the matches created by the matchCreater 
							 <Match 
								key={ index }
								round={ round }
								match={ match }
							/>
						)}
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

	