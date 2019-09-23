import { createStore } from "redux";
import reducer from "./reducer";
import initial from "./initial";

const store = createStore( reducer, initial);

// subscribe to any changes in state
store.subscribe(() => {
// get the current state using the getState method
// we can get the state, but not update it    
    let state = store.getState();
    console.log(state.numOfPlayers)
});

store.dispatch({ type: "increment" });

