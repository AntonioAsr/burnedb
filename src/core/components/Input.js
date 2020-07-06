import styled from "styled-components";
import { COLORS } from "../constants";

export const Input = styled.input`
    height: 68px;
    width: 100%;
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    line-height: 20px;
    box-sizing: border-box;
    letter-spacing: 0.52px;
    padding-left: 10px;
    color: ${props => props.id }#b1b1b1;
    border-radius: 4px;
    border: ${props => props.errorText ? `1px solid ${COLORS.alert}` :
        props.hasFocus ? `1px solid ${COLORS.active}` :
            `1px solid ${COLORS.inactive}`};
    &:hover {
        border-color: ${COLORS.active};
    }
    &:focus {
        border-color: ${COLORS.active};
        color: #4a4a4a;
        font-family: ProximaNova-Light;
        font-size: 14px;
        font-weight: 300;
        font-style: normal;
        line-height: 20px;
        letter-spacing: 0.52px;
    }
    &:focus::placeholder {
        color: transparent;
    }
    @media (max-width: 480px) {
        marginTop: ${props => props.timeBox ? 14 : 0 };
    }
`;
export default Input;