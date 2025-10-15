import styled from "@emotion/styled";
import { COLOR, GRADIENT_BACKGROUND, GRADIENT_TEXT, INNER, TITLE_SIZE } from "../../../styles/Variable";

const StyledAddProject = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    > .container {
        ${INNER};
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 100px;
        > .title {
            font-size: ${TITLE_SIZE.large};
            font-family: 'Sb';
            font-weight: 400;
        }
        > form {
            width: 100%;
            display: flex;
            flex-direction: column;
            > .device {
                display: flex;
                justify-content: flex-start;
                > label {
                    padding: 0.5em 1em;
                }
                > input:checked + label {
                    ${GRADIENT_BACKGROUND(1)};
                }
            }
        }
    }
`;
export default StyledAddProject;