import React from 'react'
import Match from "../../Match";

export const Round = ({ matches }) =>
	<div className="col-sm">
		<h1>First Round</h1>
		{
			<Match
				player1={ matches.players }
				player2={ matches.players }
			/>
		}
	</div>