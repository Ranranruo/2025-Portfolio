import styled from "@emotion/styled";
import { BOX_SHADOW, COLOR, GRADIENT_BACKGROUND, GRADIENT_TEXT, TITLE_SIZE } from "../../../styles/Variable";

const StyledSlide = styled.section`
        overflow-x: hidden;
    > .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 100px;
        .container.title {
            display: flex;
            align-self: center;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            > h1 {
                font-size: ${TITLE_SIZE['huge']};
            }
            > h2 {
                font-weight: lighter;
                font-size: ${TITLE_SIZE['verysmall']};
                ${GRADIENT_TEXT};
            }

        }
        ul.container.slide {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
            > li {
                position: relative;
                > ul {
                    display: flex;
                    gap: 20px;
                    > li {
                        overflow: hidden;
                        background-color: #fff;
                        border-radius: 10px;
                        aspect-ratio: 16/9;
                        height: 200px;
                        ${BOX_SHADOW};
                        > a > img {
                            width: 100%;
                            height: 100%;
                            background-size: 100%;
                            background-position: top;
                            background-repeat: no-repeat;
                        }
                    }
                    li.mobile {
                        aspect-ratio: 9/16;
                    }
                }
            }
        }
    }
`;

export default StyledSlide;