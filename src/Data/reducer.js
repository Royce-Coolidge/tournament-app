import { ADD_PLAYER, RESET, SUBMIT, SUBMIT_WINNERS, SELECT_WINNER } from './action-types'
import initial from './initial'
import {shuffle} from "../services";


const addMatchId = (players) => {
	let matchId = 0
	return players.map((player, index) => {

		index % 2 === 0 && matchId++

		return ({ ...player, matchId })
	})
}


let reducer = (state, action) => {
    
    switch(action.type) {
        case (ADD_PLAYER): {
            // 
            return ({
                ...state,
                players:[...state.players,  {
                            id: (state.players.length +1),
                            name: action.payload,
                            roundId: 1,
                        }],
                numOfPlayers: state.numOfPlayers +=1,
            })
        }
        case (SELECT_WINNER): {
            // 
            return ({
                ...state,
                players:[...state.players,  {
                            id: (state.players.length +1),
                            name: action.name,
                            roundId: action.roundId +=1,
                        }],
                champion: state.totalRounds === state.rounds.length ? action.name : null,
            })
        }

        case (RESET): {
            return ({
                ...initial,
            })
        }
        case (SUBMIT): {
            return ({
                ...state,
                players: [],
                rounds: [ ...state.rounds, state.rounds.length ? addMatchId(state.players) : addMatchId(shuffle(state.players)) ],
                submitted: state.submitted = true,
                numOfPlayers: state.players.length,
                totalRounds: Math.log2(state.players.length),
            })
        }
        case (SUBMIT_WINNERS): {
                return ({
                    ...state,
                    players: [],
                    rounds: [ ...state.rounds, addMatchId(state.players)],
                    roundsPlayed: state.roundsPlayed + 1,
                    final: (state.roundsPlayed + 1) === state.totalRounds ? true : false, 

                })
        }
        
        default: return state;
    }
};

export default reducer;