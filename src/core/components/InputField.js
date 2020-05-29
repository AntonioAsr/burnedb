import React, { useState } from "react";
import PropTypes from "prop-types";
import Text from "../components/Text";
import { COLORS } from "../constants";

// Notes:
// Only pass style as prop to this InputField component to style its layout eg. padding or margin.
const InputField = ({ setInputValue, maxLength, errorText, id, placeholder, labelText, type, style }) => {

    const [ hasFocus, toogleFocus ] = useState(false);
    const [ charLeft, setCharLeft ] = useState(maxLength);
    const [ currentStyle, setCurrentStyle ] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value, e.target.id);
        if (e.target.value === "") {
            setCurrentStyle("inactiveInput");
        } else {
            setCurrentStyle("activeInput");
        }
        setCharLeft(e.target.value.length);
    };

    let borderStyle = hasFocus ? `1px solid ${COLORS.active}` : `1px solid ${COLORS.inactive}`;
    borderStyle = errorText ? `1px solid ${COLORS.alert}` : borderStyle;
    return (
        <div style={{ ...style }}>
            <label htmlFor={id}>
                <Text fontType="h3SemiBold" color={COLORS.active} style={{ display: "inline" }}>{labelText}</Text>
            </label>
            <input
                id={id}
                onChange={(e) => handleChange(e)}
                onFocus={() => toogleFocus(!hasFocus)}
                onBlur={() => toogleFocus(!hasFocus)}
                className={currentStyle ? currentStyle : "inactiveInput"}
                placeholder={placeholder}
                type= {type ? type : "text"}
                style={{ height: "68px", borderRadius: "4px", width: "100%", paddingLeft: "10px", border: borderStyle }}
                maxLength={maxLength}
            />
            {errorText && (
                <div style={{ marginLeft: "15px" }}>
                    <Text fontType="bodyXSmallRegular" color={COLORS.alert}>{errorText}</Text>
                </div>
            )}
            {maxLength && (
                <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "2px" }}>
                    <Text fontType="bodySmallRegular" color={COLORS.active}>{`(${charLeft}/${maxLength})`}</Text>
                </div>
            )}
        </div>
    );
};

InputField.propTypes = {
    setInputValue: PropTypes.func,
    maxLength: PropTypes.number,
    errorText: PropTypes.string,
    placeholder: PropTypes.string,
    labelText: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object
};

export default InputField;