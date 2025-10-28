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
            gap: 35px;
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
            > .title-image {
                display: flex;
                flex-direction: column;
                align-items: center;
                .texts {
                    align-self: start;
                }
                img {
                    aspect-ratio: 16/9;
                    width: 100%;
                    border-radius: 10px;
                    background-color: ${COLOR['back02']};
                }
                label {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    gap: 20px;
                    max-width: 100%;
                    height: 740.25px;
                    aspect-ratio: 16/9;
                    transition: .3s;
                    border-radius: 10px;
                    background-color: ${COLOR['back02']};
                    border: 3px solid ${COLOR['back03']};
                    padding: 2em;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    > svg {
                        font-size: 100px;
                        fill: ${COLOR['main01']};
                        background-color: rgba(254, 193, 100, .15);
                        padding: 25px;
                        border-radius: 100px;
                    }
                    h2 {
                        text-align: center;
                        font-weight: 400;
                        color: ${COLOR['text01']};
                        line-height: 1.5em;
                    }
                    p {
                        color: ${COLOR['text02']};
                    }
                }
                label:hover {
                    filter: brightness(.95);
                }
            }
            > .sub-image {
                > ul {
                    display: flex;
                    gap: 15px;
                    > * {
                        border: 3px solid ${COLOR['back03']};
                        border-radius: 10px;
                        height: 200px;
                    }
                    > li {
                        aspect-ratio: 16/9;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    label {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        aspect-ratio: 1/1;
                        background-color: ${COLOR['back02']};
                        svg {
                            font-size: 60px;
                            stroke: ${COLOR['text02']};
                        }
                    }
                    label:hover {
                        filter: brightness(.95);
                    }
                }
            }
        }
    }
`;
export default StyledAddProject;