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
