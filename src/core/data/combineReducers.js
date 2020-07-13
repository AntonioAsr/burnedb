import { combineReducers } from "redux";
import { createStore } from "redux";
import { saveStateInLocalStorage, loadStateFromLocalStorage } from "../utils";
import throttle from "lodash/throttle";

import modalsReducer from "./reducers/modalsReducer.js";
import userReducer from "./reducers/userReducer.js";
import recipesReducer from "./reducers/recipeReducer";

const savedState = loadStateFromLocalStorage("bbuter");

const appReducers = combineReducers({
    user: userReducer,
    modals: modalsReducer,
    recipes: recipesReducer
});

const store = createStore(
    appReducers,
    savedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
    const savedData = {
        user: store.getState().user
    };
    saveStateInLocalStorage("bbuter",savedData);
}));

export default store;
