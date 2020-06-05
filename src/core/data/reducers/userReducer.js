import  * as userActions from "../actions/userActions";

export default function(
    state = {
        isLoggedIn: false,
        userName: ""
    },
    action
) {

    switch (action.type) {

        case userActions.LOG_IN: {
            return {
                ...state,
                isLoggedIn: true
            };
        }

        case userActions.LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                userName: ""
            };
        }

        default:
            return state;
    }
}
