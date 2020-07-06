import styled, { css } from "styled-components";
import { COLORS } from "../constants";
// import mediaQueries from "./mediaQueries";
import minusInactive from "../images/minusInactive.png";
import minusActive from "../images/minusActive.png";
import plusActive from "../images/plusActive.png";

export const IncreaseQuantityActiveButton = styled.button`
    height: 70px;
    width: 70px;
    background-color: rgba(0,0,0,0);
    border: none;
    background-image: url(${plusActive});
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    outline: none;
    `;

export const DecreaseQuantityInactive = styled.button`
    height: 70px;
    width: 70px;
    background-color: rgba(0,0,0,0);
    border: none;
    background-image: url(${minusInactive});
    cursor: not-allowed;
    background-repeat: no-repeat;
    background-size: cover;
    outline: none;
    `;

export const DecreaseQuantityActive = styled.button`
    height: 70px;
    width: 70px;
    background-color: rgba(0,0,0,0);
    border: none;
    background-image: url(${minusActive});
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    outline: none;
`;
