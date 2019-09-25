import { ADD_PLAYER, RESET, SUBMIT } from './action-types'

const initialState = {
    playerName: "",
    numOfPlayers: 0,
    players: [],
    submitted: false,
}

let reducer = (state = initialState, action) => {
    
    switch(action.type) {
        case (ADD_PLAYER): {
            return ({
                ...state,
                players : [...state.players, action.payload],
                numOfPlayers: state.numOfPlayers + 1,
                
            })
        }
        case (RESET): {
            return ({
                ...initialState,
            })
        }
        case (SUBMIT): {
            return ({
                ...state,
                submitted: state.submitted = true,
            })
        }
        default: return state;
    }
};

export default reducer;