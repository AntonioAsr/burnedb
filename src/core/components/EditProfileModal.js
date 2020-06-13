import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { HIDE_EDIT_PROFILE_MODAL } from "../data/actions/modalActions";
import { useDispatch } from "react-redux";
import { COLORS } from "../constants";
import closeBlack from "../images/icons/closeBlack.png";
import Text from "../components/Text";
import InputField from "../components/InputField";
import { Button } from "../components/Button";
import ProfileImage from "../components/ProfileImage";
import { LOG_OUT } from "../data/actions/userActions";

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
        height: "841px",
        borderRadius: "10px",
        border: "none",
        padding: "0px"
    }
};

const EditProfileModal = () => {
    const dispatch = useDispatch();
    const [ password, setNewPassword ] = useState("");
    const showModal = useSelector(state => state.modals.editProfileModal);
    const userName = useSelector(state => state.user.userDetails.username);
    const logOutUser = () => {
        // api call to log out, then
        dispatch({ type: HIDE_EDIT_PROFILE_MODAL });
        dispatch({ type: LOG_OUT });
    };
    return (
        <Modal isOpen={showModal} style={customStyles} contentLabel="reset password modal">
            <div
                role="button"
                tabIndex={0}
                onKeyDown={() => dispatch({ type: HIDE_EDIT_PROFILE_MODAL })}
                onClick={() => dispatch({ type: HIDE_EDIT_PROFILE_MODAL })}
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
            <div style={{ display: "flex", margin: "auto", justifyContent: "center", textAlign: "center", flexFlow: "column", maxWidth: "600px" }}>
                <Text fontType="hero" color={COLORS.active} style={{ marginTop: "54px" }}>Edit Profile</Text>
                <div style={{ display: "block", margin: "auto", justifyContent: "center", textAlign: "center", flexFlow: "column", maxWidth: "600px" }}>
                    <ProfileImage fontType="heroBig" userName={userName} size="132px" style={{ marginTop: "17px" }} />
                </div>
                <Text style={{ marginTop: "15px" }} fontType="bodyRegular" color={COLORS.secondary}>Change your profile picture</Text>
                <InputField
                    hasFocus={false}
                    setInputValue={setNewPassword}
                    placeholder={userName}
                    style={{ marginTop: "25px" }}
                />
                <InputField
                    hasFocus={false}
                    setInputValue={setNewPassword}
                    placeholder="Bio"
                    maxLength={80}
                    style={{ marginTop: "25px" }}
                />
                <InputField
                    hasFocus={false}
                    setInputValue={setNewPassword}
                    placeholder="URL"
                    style={{ marginTop: "25px" }}
                />
                <Button color={COLORS.disabled} style={{ marginTop: "28px", backgroundColor: "#b1b1b1", width:"100%" }}>
                    <Text fontType="h3semibold" color={COLORS.white}>Edit Profile</Text>
                </Button>
                <div style={{ marginTop: "25px" }} role="button" tabIndex={0} onKeyDown={() => dispatch({ type: HIDE_EDIT_PROFILE_MODAL })} onClick={() => dispatch({ type: HIDE_EDIT_PROFILE_MODAL })}>
                    <Text fontType="bodyRegular" color={COLORS.secondary}>Cancel</Text>
                </div>
                <Text fontType="bodyRegular" color={COLORS.active} style={{ marginTop: "16px", width: "601px", marginLeft: "auto", marginRight: "auto" }}>
                If you wish to change your login details, such as email addres or password, please send an email to {" "}
                    <a href="mailto:info@burntbutter.com" style={{ display: "inline-flex" }}>
                        <Text fontType="bodyRegular" color={COLORS.secondary}>info@burntbutter.com
                        </Text>
                    </a>
                </Text>
                <div style={{ marginTop: "5px" }} role="button" tabIndex={0} onKeyDown={() => dispatch({ type: HIDE_EDIT_PROFILE_MODAL })} onClick={() => logOutUser()}>
                    <Text fontType="bodyRegular" color={COLORS.secondary}>Log out {userName}</Text>
                </div>
            </div>
        </Modal>
    );
};

export default EditProfileModal;