import { ADD_PLAYER, RESET, SUBMIT } from './action-types'
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

            return ({
                ...state,
                players:[...state.players,  {
                            id: (state.players.length +1),
                            name: action.payload,
                            roundId: 1,
                        }],
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
        
        default: return state;
    }
};

export default reducer;