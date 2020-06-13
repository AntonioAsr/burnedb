import closeWhite from "../images/icons/closeWhite.png";
import React from "react";

const XCloseButtonWhite = ({ style }) => {
    return (
        <img src={closeWhite} alt="Spinner" style={{
            cursor: "pointer",
            right: 0,
            width: "18px",
            height: "18px",
            objectFit: "contain",
            ...style
        }} />
    );
};

export default XCloseButtonWhite;