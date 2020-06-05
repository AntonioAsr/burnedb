import  * as modalActions from "../actions/modalActions";

export default function(
    state = {
        resetPassword: false
    },
    action
) {

    switch (action.type) {

        case modalActions.SHOW_RESET_PASSWORD: {
            return {
                ...state,
                resetPassword: true
            };
        }

        case modalActions.HIDE_RESET_PASSWORD: {
            return {
                ...state,
                resetPassword: false
            };
        }

        default:
            return state;
    }
}
