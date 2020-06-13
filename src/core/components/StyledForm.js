import styled, { css } from "styled-components";
import { COLORS } from "../constants";
// import mediaQueries from "./mediaQueries";

export const StyledForm = styled.form`


    @media (min-width: 1200px) {

    }

    /* Landscape tablets and medium desktops */
    @media (min-width: 992px) and (max-width: 1199px) {
        margin-left: auto;
        margin-right: auto;
    }

    /* Portrait tablets and small desktops */
    @media (min-width: 768px) and (max-width: 991px) {
        margin-left: auto;
        margin-right: auto;
    }

    /* Portrait phones and smaller */
    @media (max-width: 480px) {
        width: 100%;
        display: flex;
        flex-flow: column;
        text-align: center;
        justify-content: center;
        align-items: center;
    }


`;
