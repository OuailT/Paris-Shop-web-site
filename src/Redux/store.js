import { createStore } from "redux";
import { reducers } from "./Reducers/CombinedReducers";


// create store takes 3 arguments : reducers, the store

const store = createStore(reducers, {}, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
