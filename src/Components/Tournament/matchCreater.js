export const matchCreater = (players) => {
	let matchId = 0
	let previousMatch = undefined
	return players.reduce((acc, current) => {
		if(previousMatch && current.matchId === previousMatch.matchId) { 
			acc.push({
				id: matchId,
				player1: previousMatch.id,
				player2: current.id,
			})
			matchId ++
		}
		previousMatch = current
		return acc
	}, [])
}

// EXPLANATION OF matchCreater FUNCTION

//. 1. matchId  variable created with initial value of 0. This will be used to delcare the 'id' key value in the newly formed match object. 

// 2. previousMatch variable created to store curreNT, which will be the first object in the players array.

// 3. REDUCE FUNCTION:  stores first item (player) of the players array (passed in from Round.js) to previousMatch variable.

// 4.  IF STATEMENT: If the next item (player) in the array has the same matchId as the player stored in the previousMatch variable then...

// 5. EXECUTION BLOCK: ...an object is created with both players' player Ids  as values stored in keys player1, player 2 respectively.

// 6. The matchId is stored in key "id". first time will be its initial value of 0

// 7. Finally this new object is pushed onto the empty accumulator array (empty for first iteration only)

// 8. The match Id is then incremented so that each new match object has a unique id.

export const twoWinnerCheck = (winners) => {
	let previousMatch = undefined
	return winners.reduce((acc, current) => {
		if(previousMatch && current.matchId === previousMatch.matchId) { 
			acc = false
		}
		previousMatch = current
		return acc
	}, true)
}