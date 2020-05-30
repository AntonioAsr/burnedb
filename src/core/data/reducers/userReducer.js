import  * as userActions from "../actions/userActions";

export default function(
    state = {
        isLoggedIn: false,
        userName: ""
    },
    action
) {

    switch (action.type) {

        case userActions.logIn: {
            return {
                ...state,
                isLoggedIn: true,
                userName: action.payload
            };
        }

        case userActions.logOut: {
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
