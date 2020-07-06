import styled, { css } from "styled-components";
import { COLORS } from "../constants";
// import mediaQueries from "./mediaQueries";





const RecipeGridSystem = styled.div`

    display: grid;

    @media (min-width: 1200px) {
        background-color: red;
        grid-template-columns: repeat(3);
        grid-template-rows: repeat(3, auto);
        grid-column-gap: 24px;
        grid-row-gap: 51px;
        /* grid-template-columns: 12px 12px 12px;
        grid-template-rows: 12px 12px 12px; */
    }

    /* Landscape tablets and medium desktops */
    @media (min-width: 992px) and (max-width: 1199px) {
        grid-template-columns: 283px 283px 283px;
        grid-template-rows: 309px 309px 309px;
        background-color: blue;
    }

    /* Portrait tablets and small desktops */
    @media (min-width: 768px) and (max-width: 991px) {

    }


    /* Portrait phones and smaller */
    @media (max-width: 480px) {

    }

`;

export default RecipeGridSystem;
