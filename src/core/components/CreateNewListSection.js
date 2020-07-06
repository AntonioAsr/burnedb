import styled, {css} from "styled-components";
import { COLORS } from "../constants";


const CreateNewListSection = styled.div`
    margin-left: 100px;
    margin-top: 35px;
    /* margin-right: "200px"; */
    
    /* Portrait tablets and small desktops */
    @media (min-width: 768px) and (max-width: 991px) {
        margin-left: 0px;
    }


    /* Portrait phones and smaller */
    @media (max-width: 480px) {
        margin-left: 0px;
    }
`;

export default CreateNewListSection;