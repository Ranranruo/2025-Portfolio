import styled from "@emotion/styled";
import { COLOR, GRADIENT_BACKGROUND, GRADIENT_TEXT, INNER, TITLE_SIZE } from "../../../styles/Variable";

const StyledAddProject = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${COLOR.background01};
    .container {
        ${INNER};
        border-radius: 5px;
        > .title {
            font-size: ${TITLE_SIZE.large};
        }
    }
`;
export default StyledAddProject;