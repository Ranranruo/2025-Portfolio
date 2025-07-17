import styled from "@emotion/styled";
import { GRADIENT_BACKGROUND, GRADIENT_TEXT, INNER, TITLE_SIZE } from "../../../styles/Variable";

const StyledAddProject = styled.section`
    width: 100%;
    height: 100vh;
    ${GRADIENT_BACKGROUND};
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
        ${INNER};

    }
`;
export default StyledAddProject;