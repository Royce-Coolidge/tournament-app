export const matchAdapter = (players) => {
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
