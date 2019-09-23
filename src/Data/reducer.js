import initial from "./initial";

const addPlayer = (state, {player}) => {
    let players = state.players;
    return (
        {...state,
            players: [...players, player],
            player: "",   
        }
    );
};



let reducer = (state, action) => {
    switch(action.type) {
        case "addPlayer": return addPlayer(state, action);
        case "reset": return { ...initial };
        default: return state;
    }
};

export default reducer;