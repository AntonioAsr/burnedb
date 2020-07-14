
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
            return JSON.parse(serializedState);
        }
    }
    // Catch where browsers do not support local storage or access is blocked
    catch (error) {
        console.error("Error reading local storage.", error);
        return undefined;
    }
};


export const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export const srcToFile = (src, fileName, mimeType) => {
    return (fetch(src)
    .then(function (res) { return res.arrayBuffer(); })
    .then(function (buf) { return new File([buf], fileName, { type: mimeType }); })
    );
};

//usage example: (works in Chrome and Firefox)
//convert src to File and upload to server php
// srcToFile('/images/logo.png', 'new.png', 'image/jpeg')
//     .then(function (file) {
//         var fd = new FormData();
//         fd.append('file1', file);
//         return fetch('/upload.php', { method: 'POST', body: fd });
//     })
//     .then(function (res) {
//         return res.text();
//     })
//     .then(console.log)
//     .catch(console.error)
//     ;