import styled from "@emotion/styled";
import { BOX_SHADOW, COLOR, GAP, GRADIENT_BACKGROUND, GRADIENT_TEXT, INNER, TITLE_SIZE } from "../../../styles/Variable";

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
            align-items: flex-start;
            gap: 15px;
            > .device {
                padding: .4em;
                border-radius: 5px;
                background: ${COLOR['white03']};
                display: flex;
                justify-content: flex-start;
                gap: ${GAP['verysmall']};
                > label {
                    background: ${COLOR['white03']};
                    border-radius: 5px;
                    padding: 0.5em 1em;
                }
                > :not(input:checked) + label:hover {
                    filter: brightness(.95);
                }
                > input:checked + label {
                    ${GRADIENT_BACKGROUND(1)};
                }
            }
            > .title-img {
                width: 100%;
                label { 
                    display: flex;
                    width: 100%;
                    justify-content: center;
                }
                img {
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-color: ${COLOR['white03']};
                    padding: .5em;
                    border-radius: 5px;
                    height: 776px;
                    transition: .5s;
                }
                img.desktop {
                    aspect-ratio: 16/9;
                }
                img.mobile {
                    aspect-ratio: 9/16;
                }
            }
        }
    }
`;
export default StyledAddProject;