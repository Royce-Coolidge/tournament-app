import { ADD_PLAYER, RESET, SUBMIT } from './action-types'

const initialState = {
    playerName: "",
    numOfPlayers: 0,
    players: ["Rowley", "Matilda", "Fergus", "Sholto"],
    submitted: false,
    matches: [],
}

let matchMake = (state = initialState) =>{
    
    for (let i = 0; i < state.players.length; i += 1) {
        let match = state.players.slice(i, i + 2)
        return {
            matches: state.matches.push(match)
        }
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
        case (SUBMIT): {
            return ({
                ...state,
                submitted: state.submitted = true,
                matches: matchMake(),
            })
        }
        default: return state;
    }
};

export default reducer;