import React, { useState } from "react";
import PropTypes from "prop-types";
import Text from "../components/Text";
import { COLORS } from "../constants";
import Input from "../components/Input";

// Notes:
// Only pass style as prop to this InputField component to style its layout eg. padding or margin.
const InputField = ({ setInputValue, maxLength, errorText, id, placeholder, labelText, style, type, inputStyles }) => {

    const [ charLeft, setCharLeft ] = useState("00");
    // const [ currentStyle, setCurrentStyle ] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value, e.target.id);
        setCharLeft(e.target.value.length);
    };
    return (
        <div style={{ ...style }}>
            <label htmlFor={id}>
                <Text fontType="h3SemiBold" color={COLORS.active} style={{ display: "inline" }}>{labelText}</Text>
            </label>
            <Input
                id={id}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
                maxLength={maxLength}
                type={type}
                style={inputStyles}
                errorText={errorText}
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