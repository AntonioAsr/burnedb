export const SHOW_RESET_PASSWORD = "SHOW_RESET_PASSWORD";
export function showResetPasswordModal() {
    return {
        type: SHOW_RESET_PASSWORD
    };
}

export const HIDE_RESET_PASSWORD = "HIDE_RESET_PASSWORD";
export function hideResetPasswordModal() {
    return {
        type: HIDE_RESET_PASSWORD
    };
}

export const SHOW_EDIT_PROFILE_MODAL = "SHOW_EDIT_PROFILE_MODAL";
export function showEditProfileModal() {
    return {
        type: SHOW_EDIT_PROFILE_MODAL
    };
}

export const HIDE_EDIT_PROFILE_MODAL = "HIDE_EDIT_PROFILE_MODAL";
export function hideEditProfileModal() {
    return {
        type: HIDE_EDIT_PROFILE_MODAL
    };
}
