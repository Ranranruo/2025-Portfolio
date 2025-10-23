import styled from "@emotion/styled";
import { BOX_SHADOW, COLOR, CONTENT_SIZE, GAP, GRADIENT_BACKGROUND, INNER, TITLE_SIZE } from "../../../styles/Variable";

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
        gap: 50px;
        > .title {
        width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.1em;
            > h1 {
                margin-top: 50px;
                font-size: ${TITLE_SIZE.large};
                color: ${COLOR['text01']};
                font-weight: 600;
            }
            > p {
                font-size: ${CONTENT_SIZE.large};
                color: ${COLOR['text02']};
            }
        }
        > form {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            > .container {
                display: flex;
                flex-direction: column;
                gap: 30px;
                width: 100%;
                padding: 2em;
                border-radius: 10px;
                background-color: ${COLOR['back01']};
                ${BOX_SHADOW};
                > .texts {
                    display: flex;
                    flex-direction: column;
                    gap: .6em;
                    > h2 {
                        font-weight: 400;
                        font-size: ${TITLE_SIZE.verysmall};
                    }
                    > p {
                        font-size: ${CONTENT_SIZE.small};
                        color: ${COLOR['text02']};
                    }
                }
            }
            > .device {
                > ul {
                    display: flex;
                    justify-content: space-between;
                    gap: 15px;
                    > li {
                        cursor: pointer;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 10px;
                        border-radius: 5px;
                        width: 100%;
                        padding: 1em;
                        background-color: ${COLOR['back02']};
                        > svg {
                            font-size: ${TITLE_SIZE.medium};
                        }
                    }
                    > li:hover {
                        filter: brightness(.95);
                    }
                    > li.active {
                        ${GRADIENT_BACKGROUND(1)};
                        >p {
                            color: ${COLOR['white01']};
                        }
                        > svg {
                            fill: ${COLOR['white01']};
                            stroke: ${COLOR['white01']};
                        }
                            
                    }

                }
            }
        }
    }
`;
export default StyledAddProject;