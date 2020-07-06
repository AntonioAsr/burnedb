import React, { useState } from "react";
import PropTypes from "prop-types";
import Text from "../components/Text";
import { COLORS } from "../constants";
import Input from "../components/Input";

// Notes:
// Only pass style as prop to this InputField component to style its layout eg. padding or margin.
const TimeBox = ({ setInputValue, id, placeholder, labelText, style, type, inputStyles }) => {

    const [ charLeft, setCharLeft ] = useState("--");
    // const [ currentStyle, setCurrentStyle ] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value, e.target.id);
        setCharLeft(e.target.value.length);
    };
    return (
        <div style={{ display: "inline-flex", alignItems: "center", ...style }}>
            <Input
                id={id}
                onChange={(e) => handleChange(e)}
                placeholder="00"
                maxLength={2}
                type={type}
                style={inputStyles}
                timeBox={true}
            />
            <label htmlFor={id}>
                <Text fontType="bodyLarge" color={COLORS.active} style={{ display: "inline", marginLeft: "10px" }}>{labelText}</Text>
            </label>
        </div>
    );
};

TimeBox.propTypes = {
    setInputValue: PropTypes.func,
    maxLength: PropTypes.number,
    errorText: PropTypes.string,
    placeholder: PropTypes.string,
    labelText: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object
};

export default TimeBox;