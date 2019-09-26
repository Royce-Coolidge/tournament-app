import { ADD_PLAYER, RESET, SUBMIT, WINNER } from './action-types'
import initial from './initial'


let reducer = (state, action) => {
    
    switch(action.type) {
        case (ADD_PLAYER): {
            let players = state.players;
            
            return ({
                ...state,
                players :[...players,  {
                            id: (+players.length +1),
                            name: action.payload,
                            roundId: 1,
                        }]
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
                submitted: state.submitted =true,
            })
        }
        case (WINNER): {
            return ({
                ...state,
                winners: [...state.winners, action.payload]
            })
        }
        default: return state;
    }
};

export default reducer;