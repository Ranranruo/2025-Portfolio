import styled from "@emotion/styled";
import { COLOR, GRADIENT_BACKGROUND, GRADIENT_TEXT, INNER, TITLE_SIZE } from "../../../styles/Variable";

const StyledAddProject = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    .container {
        ${INNER};
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        > .title {
            font-size: ${TITLE_SIZE.large};
            font-family: 'Sb';
            font-weight: 400;
        }
    }
`;
export default StyledAddProject;