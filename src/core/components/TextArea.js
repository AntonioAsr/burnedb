import React, { useState } from "react";
import PropTypes from "prop-types";
import Text from "../components/Text";
import { COLORS } from "../constants";
import styled from "styled-components";

const CustonTextArea = styled.textarea`
    height: 111px;
    width: 100%;
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    line-height: 20px;
    box-sizing: border-box;
    letter-spacing: 0.52px;
    padding-left: 10px;
    max-width: -webkit-fill-available;
    border-radius: 4px;
    padding: 23px;
    font-family: "ProximaNova-Light";
    font-size: "14px";
    font-weight: "300";
    font-style: "normal";
    line-height: "20px";
    letter-spacing: "0.52px";
    &:focus::placeholder {
        color: transparent;
    }
    color: ${COLORS.inactive};
    &:focus {
        border-color: ${COLORS.active};
        outline: 1px solid ${COLORS.active};
    }
    border: ${props => props.errorText ? `1px solid ${COLORS.alert}` :
        props.hasFocus ? `1px solid ${COLORS.active}` :
            `1px solid ${COLORS.inactive}`};
`;
// Notes:
// Only pass style as prop to this InputField component to style its layout eg. padding or margin.
const TextArea = ({ setInputValue, id, placeholder, labelText, style, type, value, inputStyles }) => {

    const handleChange = (e) => {
        setInputValue(e.target.value, e.target.id);
        setCharLeft(e.target.value.length);
    };
    const [ charLeft, setCharLeft ] = useState("--");
    // const [ currentStyle, setCurrentStyle ] = useState("");

    return (
        <div style={{ ...style }}>
            <CustonTextArea
                id={id}
                onChange={setInputValue}
                placeholder={placeholder}
                type={type}
                style={{ width: "100%", borderColor: `${COLORS.inactive}` }}
                value={value}
            />
        </div>
    );
};

TextArea.propTypes = {
    setInputValue: PropTypes.func,
    maxLength: PropTypes.number,
    errorText: PropTypes.string,
    placeholder: PropTypes.string,
    labelText: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object
};

export default TextArea;