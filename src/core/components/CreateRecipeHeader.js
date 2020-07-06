import styled, { css } from "styled-components";
import { COLORS } from "../constants";
// import mediaQueries from "./mediaQueries";
const CreateRecipeHeader = styled.div`
    border-bottom: 1px solid #979797;
    height: 96px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: ${COLORS.white};

    @media (min-width: 1200px) {

    }

    /* Landscape tablets and medium desktops */
    @media (min-width: 992px) and (max-width: 1199px) {

    }

    /* Portrait tablets and small desktops */
    @media (min-width: 768px) and (max-width: 991px) {

    }


    /* Portrait phones and smaller */
    @media (max-width: 480px) {
   
    }

`;
export default CreateRecipeHeader;