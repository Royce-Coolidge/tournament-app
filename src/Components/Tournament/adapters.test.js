import { matchAdapter } from './adapters'

const mockPlayers = [{
		id: 1,
		name: "Rowley",
		roundId: 1,
		matchId: 1

	},
	{
		id: 2,
		name: "Jack",
		roundId: 1,
		matchId: 1

	},
	{
		id: 3,
		name: "Maff",
		roundId: 1,
		matchId: 2

	},
	{
		id: 4,
		name: "Jim",
		roundId: 1,
		matchId: 2
	}]

const mockPlayers2 = [
	{
		id: 2,
		name: "Jack",
		roundId: 1,
		matchId: 2

	},
	{
		id: 3,
		name: "Maff",
		roundId: 1,
		matchId: 2

	},]


const mockMatchResult = [
	{
		id: 0,
		player1: 1,
		player2: 2,
	},
	{
		id: 1,
		player1: 3,
		player2: 4,
	},
]

const mockMatchResult2 = [
	{
		id: 0,
		player1: 2,
		player2: 3
	}
]


describe('match', () => {
	it('should match players', () => {
		expect(matchAdapter(mockPlayers)).toEqual(mockMatchResult)
	})
	it('should match players when not in order', () => {
		expect(matchAdapter(mockPlayers2)).toEqual(mockMatchResult2)
	})
})