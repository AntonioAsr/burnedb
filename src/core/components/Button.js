import styled, { css } from "styled-components";
import { COLORS } from "../constants";
// import mediaQueries from "./mediaQueries";

export const ButtonSecondary = styled.button`
    height: 39px;
    width: 100px;
    background-color: rgba(0,0,0,0);
    border: 1px solid white;
    border-radius: 4px;
    color: ${COLORS.white};
    cursor: pointer;
`;

export const ButtonSmallFilled = styled.button`
    height: 39px;
    width: 100px;
    cursor: ${props => props.canSaveAsDraft ? "pointer" : "not-allowed"};
    border-radius: 4px;
    border: none;
    background-color: ${props => props.backgroundColor};
    `;

export const ButtonSmallOutlined = styled.button`
    cursor: pointer;
    background-color: rgba(0,0,0,0);
    height: 39px;
    width: 100px;
    border: 1px solid ${COLORS.inactive};
    border-radius: 4px;
    color: ${props => props.color};
    background-color: none;
`;

export const ButtonTertiary = styled.button`
    cursor: ${props => props.enable ? "pointer": "not-allowed"};
    width: 210px;
    height: 68px;
    background-color: rgba(0,0,0,0);
    border: ${props =>`1px solid ${props.border}`};
    border-radius: 4px;
`;

export const Button = styled.button`
    width: 385px;
    height: 68px;
    border-radius: 10px;
    border: none;

    @media (min-width: 1200px) {
        width: 600px;
        height: 68px;
    }

    /* Landscape tablets and medium desktops */
    @media (min-width: 992px) and (max-width: 1199px) {

    }

    /* Portrait tablets and small desktops */
    @media (min-width: 768px) and (max-width: 991px) {
        width: 385px;
        height: 68px;
    }


    /* Portrait phones and smaller */
    @media (max-width: 480px) {
        width: 304px;
        height: 54px;
    }

    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${props => props.status === "active" && css`
        background-color: ${COLORS.primary}
    `}
    ${props => props.status === "inactive" && css`
        background-color: ${COLORS.inactive}
    `}
`;
