import React from "react";
import { COLORS } from "../constants";
import PropTypes from "prop-types";
import Text from "../components/Text";

// import mediaQueries from "./mediaQueries";
// const ProfileImage = styled.Image`
//   border-radius: 50;
//   height: 50;
//   width: 50;
// `;
// export default ProfileImage;

const ProfileImage = ({ imageSrc, userName }) => {
    const firstletter = userName[0].toUpperCase();
    return (
        imageSrc ? (
            <div style={{ width: "33px", height: "33px", borderRadius: "50%" }}>
                {/* TODO, cant post images in loopback?, can't pos */}
            </div>
        ) : (
            // TODO: this circle needs to be a styled component, profileImagePlaceHolder
            <div style={{
                width: "62px",
                height: "62px",
                backgroundColor: `${COLORS.primary}`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center" }}>
                <Text fontType="hero" color={COLORS.active} style={{ display: "inline" }}>{firstletter}</Text>
            </div>
        )
    );
};

ProfileImage.propTypes = {
    imageSrc: PropTypes.string,
    userName: PropTypes.string
};

export default ProfileImage;