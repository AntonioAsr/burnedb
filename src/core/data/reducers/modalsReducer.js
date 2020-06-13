import  * as modalActions from "../actions/modalActions";

export default function(
    state = {
        resetPassword: false,
        editProfileModal: false
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

        case modalActions.SHOW_EDIT_PROFILE_MODAL: {
            return {
                ...state,
                editProfileModal: true
            };
        }

        case modalActions.HIDE_EDIT_PROFILE_MODAL: {
            return {
                ...state,
                editProfileModal: false
            };
        }

        default:
            return state;
    }
}
