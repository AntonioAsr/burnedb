import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer.js";
import { createStore } from "redux";

const appReducers = combineReducers({
    user: userReducer
});

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
