
import styled from "styled-components";
import { COLORS } from "../constants";

export const SolidBorderContainer = styled.div`
    padding: 43px 50px 25px 50px;
    border: 1px solid ${COLORS.inactive};
    border-radius: 5px;
    /* Portrait phones and smaller */
    @media (max-width: 480px) {
        border: none;
        padding: 0px;
    }
`;

export default SolidBorderContainer;
