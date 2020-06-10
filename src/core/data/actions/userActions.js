export const LOG_IN = "LOG_IN";
export function logIn(userId) {
    return {
        type: LOG_IN,
        payload: userId
    };
}

export const LOG_OUT = "LOG_OUT";
export function logOut() {
    return {
        type: LOG_OUT
    };
}

export const FIRST_TIME_USER = "FIRST_TIME_USER";
export function firstTimeUser() {
    return {
        type: FIRST_TIME_USER
    };
}

export const SET_USER_DETAILS = "SET_USER_DETAILS";
export function setUserDetails(userDetails) {
    return {
        type: SET_USER_DETAILS,
        payload: userDetails
    };
}