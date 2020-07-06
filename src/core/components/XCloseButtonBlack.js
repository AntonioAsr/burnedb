import closeBlack from "../images/icons/closeBlack.png";
import React from "react";

const XCloseButtonBlack = ({ style }) => {
    return (
        <img src={closeBlack} alt="Spinner" style={{
            cursor: "pointer",
            right: 0,
            objectFit: "contain",
            ...style
        }} />
    );
};

export default XCloseButtonBlack;