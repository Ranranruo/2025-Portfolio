import styled from "@emotion/styled";
import { COLOR, CONTENT_SIZE, GRADIENT_BACKGROUND, GRADIENT_BORDER, GRADIENT_TEXT, INNER } from "../../../styles/Variable";

interface StyledVisualProps {
    isWrapped: boolean;
}

const StyledVisual = styled.section<StyledVisualProps>`
    display: flex;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    // #f6d365 0%, #fda085 100%
    background: radial-gradient(
        circle at 0% 0%, 
        ${COLOR['backDrop01']} 0%, 
        #fff 35%
    );
        /* ${COLOR['background01']} 40% */
    > .container {
        ${INNER}
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap-reverse;
        justify-content: ${({isWrapped}) => isWrapped ? "center" : "space-between"};
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 100px;            
            > .texts {
                width: 100%;
                display: flex;
                gap: 30px;
                flex-direction: column;
                justify-content: center;
                div:nth-of-type(1) {
                    span {
                        font-size: 5em;
                        font-weight: 900;
                    }
                }
                div:nth-of-type(2) {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px 0;
                    > p {
                        > span {
                            font-size: 3em;
                            font-weight: 400;
                        }
                    }
                    > :nth-of-type(2) {
                        > span {
                            ${GRADIENT_TEXT}
                        }
                        // color: ${COLOR['main01']};
                    }
                }
                h2 > p, h1 > p {
                    display: flex;
                    flex-wrap: wrap;
                }
                > .container {
                    display: flex;
                    flex-direction: column;
                }
            }
            > .buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 30px;
                > a {
                    box-shadow: rgba(0, 0, 0, .1) 0 0 30px;
                    display: inline-block;
                    border-radius: 10px;
                    font-size: ${CONTENT_SIZE['large']};
                    > span {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 1em 2em;
                        font-size: ${CONTENT_SIZE['large']};
                    }
                }
                > a:nth-of-type(1) {
                    ${GRADIENT_BACKGROUND}
                    color: ${COLOR['white01']};
                }
                > a:nth-of-type(2) {
                    position: relative;
                    background-color: #fff;
                    ${GRADIENT_BORDER}
                    border: 2px solid transparent;
                    color: transparent;
                    padding: 0em;
                    > span {
                        ${GRADIENT_TEXT}

                    }

                }
                /* > a:nth-of-type(2)::after {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    content: 'Contact';
                    color: black;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                } */
        }
    }
    > .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 100px;
        width: 35rem;
        > .back-drop {
            position: absolute;
            background: radial-gradient(
                circle at 50% 50%,
                ${COLOR['backDrop02']} 0%, 
                transparent 65%
            );
            width: 900px;
            height: 900px;
        }
        > ul {
            width: 600px;
            aspect-ratio: 1/1;
            position: relative;
            > li {
                right: 0;
                top: 0;
                position: absolute;
                width: 100%;
                height: 100%;
            }
        }
    }
}

`;

export default StyledVisual;