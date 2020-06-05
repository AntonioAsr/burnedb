import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { HIDE_RESET_PASSWORD } from "../data/actions/modalActions";
import { useDispatch } from "react-redux";
import { COLORS } from "../constants";
import closeBlack from "../images/icons/closeBlack.png";
import Text from "../components/Text";
import InputField from "../components/InputField";
import { Button } from "../components/Button";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = COLORS.fOverlay70;

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "850px",
        height: "490px",
        borderRadius: "10px",
        border: "none",
        padding: "0px"
    }
};

const ResetPasswordModal = () => {
    const dispatch = useDispatch();
    const [password, setNewPassword] = useState("");
    const showModal = useSelector(state => state.modals.resetPassword);

    return (
        <Modal isOpen={showModal} style={customStyles} contentLabel="reset password modal">
            <div
                role="button"
                tabIndex={0}
                onKeyDown={() => dispatch({ type: HIDE_RESET_PASSWORD })}
                onClick={() => dispatch({ type: HIDE_RESET_PASSWORD })}
            >
                {/* TODO: Whenever get the svg logo create a styled component with this */}
                <img src={closeBlack} alt="Spinner" style={{
                    position: "absolute",
                    marginTop: "22px",
                    marginRight: "26px",
                    cursor: "pointer",
                    right: 0,
                    width: "18px",
                    height: "18px",
                    objectFit: "contain"
                }} />
            </div>
            <div style={{ display: "block", margin: "auto", justifyContent: "center", textAlign: "center", flexFlow: "column", maxWidth: "600px" }}>
                <Text fontType="h2Semibold" color={COLORS.active} style={{ marginTop: "54px" }}>Forgot your password?</Text>

                <Text fontType="bodyRegular" color={COLORS.active} style={{ marginTop: "16px", width: "601px", height: "88px", marginLeft: "auto", marginRight: "auto" }}>
                    Enter your email address associated with you account.
                    Check your inbox and follow the instruction to reset your password.
                    If you don’t receive the instructions, please check your spam folder or alternatively email
                </Text>

                <Text fontType="bodyRegular" color={COLORS.secondary}>notify@burntbutter.com</Text>
                <InputField
                    hasFocus={false}
                    setInputValue={setNewPassword}
                    placeholder="Email Address"
                    style={{ marginTop: "25px" }}
                />
                <Button color={COLORS.disabled} style={{ marginTop: "28px", backgroundColor: "#b1b1b1" }}>
                    <Text fontType="h3semibold" color={COLORS.white}>Reset password</Text>
                </Button>
                <div style={{ marginTop: "25px" }} role="button" tabIndex={0} onKeyDown={() => dispatch({ type: HIDE_RESET_PASSWORD })} onClick={() => dispatch({ type: HIDE_RESET_PASSWORD })}>
                    <Text fontType="bodyRegular" color={COLORS.secondary}>Cancel</Text>
                </div>
            </div>
        </Modal>
    );
};

export default ResetPasswordModal;