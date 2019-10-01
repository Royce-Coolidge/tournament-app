import { ADD_PLAYER, RESET, SUBMIT, SUBMIT_WINNERS, SELECT_WINNER } from './action-types'
import initial from './initial'
import {shuffle} from "../Components/Tournament/services";


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
                winners:[...state.winners, action.name
                ]
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
            })
        }
        case (SUBMIT_WINNERS): {
                return ({
                    ...state,
                    players: [],
                    rounds: [ ...state.rounds, addMatchId(state.players)],
                    winners: []
                })
        }
        
        default: return state;
    }
};

export default reducer;