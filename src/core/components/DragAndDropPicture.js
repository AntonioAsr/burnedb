import styled, { css } from "styled-components";
import { COLORS } from "../constants";

export const DotArea =  styled.div`

    width: 100%;
    border-radius: 5px;
    height: 400px;
    margin-top: 14px;
    border: 1px solid ${COLORS.inactive};
    min-width: 347px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: 1px solid ${COLORS.active};
    }

    @media (min-width: 1200px) {
        /* height: 68px; */
    }

    /* Landscape tablets and medium desktops */
    @media (min-width: 992px) and (max-width: 1199px) {

    }

    /* Portrait tablets and small desktops */
    @media (min-width: 768px) and (max-width: 991px) {
        /* height: 68px; */
    }

    /* Portrait phones and smaller */
    @media (max-width: 480px) {
    }

`;
