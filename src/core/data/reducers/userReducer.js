import  * as userActions from "../actions/userActions";

export default function(
    state = {
        isLoggedIn: false,
        userId: "",
        firstTimeUser: true,
        userDetails: []
    },
    action
) {

    switch (action.type) {

        case userActions.LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                userId: action.payload
            };
        }

        case userActions.LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                userName: "",
                userId: ""
            };
        }

        case userActions.FIRST_TIME_USER: {
            return {
                ...state,
                firstTimeUser: false
            };
        }

        case userActions.SET_USER_DETAILS: {
            return {
                ...state,
                userDetails: action.payload
            };
        }

        default:
            return state;
    }
}
