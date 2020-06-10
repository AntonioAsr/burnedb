
/**
*  Stringifies a JSON object and saves it in the local storage under a given storage key
**/
export const saveStateInLocalStorage = (storageKey, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(storageKey, serializedState);
    }
    // Catch where browsers do not support local storage or access is blocked
    catch (error) {
        console.error("Error saving to local storage.", error);
    }
};


/**
* Loads the stored data from the local storage using a given key
* Parses the string into a JSON object and returns the JSON object
**/
export const loadStateFromLocalStorage = (storageKey) => {
    try {
        const serializedState = localStorage.getItem(storageKey);
        if (serializedState === null) {
            return undefined;
        }
        else {
            return  JSON.parse(serializedState);
        }
    }
    // Catch where browsers do not support local storage or access is blocked
    catch (error) {
        console.error("Error reading local storage.", error);
        return undefined;
    }
};