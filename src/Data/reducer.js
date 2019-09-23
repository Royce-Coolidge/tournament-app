import initial from "./initial";

let reducer = (state, action) => {
    switch(action.type) {
        case "increment": return {...state, numOfPlayers: state.numOfPlayers + 1 }
        case "save": return { state, action };
        case "reset": return { ...initial };
        default: return state;
    }
};

export default reducer;