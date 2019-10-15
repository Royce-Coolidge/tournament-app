import React from 'react'
import './round.css'
import Match  from '../Match';
import { matchCreater } from '../../matchCreater';


export const Round = ({ totalRounds, rounds, reset, submitWinners }) =>{

	return (
	<>
			{ rounds.map((round, index) =>
				<div className="d-flex align-items-center flex-column col-3">
					<h1 className="align-self-center headerFont roundHeader">
						 { (index + 1) === totalRounds ? "Final" : `Round ${(index + 1)}` }
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
						className={ `button`} 
						onClick={ submitWinners }>
						{ (index + 1) === totalRounds ? `Select the Champion` : `Progress to Round ${(index + 2)}` }</button>
					<br></br>
					<button className="btn btn-danger rounded-pill" onClick={ reset }>Start Again</button>
				</div>
			)}
	</>
	)
}

	