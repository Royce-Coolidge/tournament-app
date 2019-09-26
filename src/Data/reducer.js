import { ADD_PLAYER, RESET, SUBMIT, WINNER } from './action-types'

const initialState = {
    playerName: "",
    numOfPlayers: 0,
    players: [],
    submitted: false,
    matches: [],
    brackets:[],
    winners:[],
}

let randomiser = (state = initialState, action) =>{
    let players = state.players;
    return {
        ...state,
        players: players.sort(function() { return .5 - Math.random() }),
        submitted: state.submitted = true,
    }
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
        case (SUBMIT): return randomiser(state, action)
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