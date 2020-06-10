import React from "react";
import { FONTS } from "../constants";

const getHeadingStyle = (fontType) => {
    return FONTS[fontType];
};

const Header = ({ color, fontType, style, children }) => {
    const fontStyle = getHeadingStyle(fontType);

    if (fontType.indexOf("hero") > -1) {
        return (
            <h1 style={{ color: color, ...fontStyle, ...style }} className="hero">
                {children}
            </h1>
        );
    } else if (fontType.indexOf("h1") > -1) {
        return (
            <h1 style={{ color: color, ...fontStyle, ...style }}>
                {children}
            </h1>
        );
    } else if (fontType.indexOf("h2") > -1) {
        return (
            <h2 style={{ color: color, ...fontStyle, ...style }}>
                {children}
            </h2>
        );
    } else if (fontType.indexOf("h3") > -1) {
        return (
            <h3 style={{ color: color, ...fontStyle, ...style }}>
                {children}
            </h3>
        );
    } else if (fontType.indexOf("h4") > -1) {
        return (
            <h4 style={{ color: color, ...fontStyle, ...style }}>
                {children}
            </h4>
        );
    } else if (fontType.indexOf("h5") > -1) {
        return (
            <h5 style={{ color: color, fontStyle, ...style }}>
                {children}
            </h5>
        );
    } else if (fontType.indexOf("h6") > -1) {
        return (
            <h6 style={{ color: color, ...fontStyle, ...style }}>
                {children}
            </h6>
        );
    } else {
        return (
            <div style={{ color: color, ...fontStyle, ...style }}>
                {children}
            </div>
        );
    }
};

export default Header;