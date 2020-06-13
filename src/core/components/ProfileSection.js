import styled, { css } from "styled-components";
import { COLORS } from "../constants";

// import mediaQueries from "./mediaQueries";

export const ProfileSection = styled.div`

    width: 100%;
    max-width: 1190px;
    /* margin: 31px 127px 0px 127px; */
    align-content: center;
    display: flex;
    flex-flow: row;
    ${props => props.border && css`
        border-bottom: 1px solid #979797;
    `}

    @media (min-width: 1200px) {
        max-width: 1000px;
    }

    /* Landscape tablets and medium desktops */
    @media (min-width: 992px) and (max-width: 1199px) {
        max-width: 900px;
    }

    /* Portrait tablets and small desktops */
    @media (min-width: 768px) and (max-width: 991px) {
        max-width: 800px;
    }


    /* Portrait phones and smaller */
    @media (max-width: 480px) {
        max-width: 460px;
        margin-left: 10px;
        margin-right: 10px;
    }
        margin-top: 31px;
        margin-left: auto;
        margin-right: auto;

`;
export default ProfileSection;