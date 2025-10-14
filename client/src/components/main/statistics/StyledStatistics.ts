import styled from "@emotion/styled";
import { BOX_SHADOW, COLOR, GRADIENT_TEXT, INNER, TITLE_SIZE } from "../../../styles/Variable";

interface StyledStatisticsProps {
    isWrapped: boolean;
}

const StyledStatistics = styled.section<StyledStatisticsProps>`
    > .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: ${({isWrapped}) => isWrapped ? "center" : "space-between"};
        gap: 5em;
        font-size: 1rem;
        ${INNER}
        > .image {
            height: 45em;
            display: flex;
            align-items: center;
            justify-content: center;
            > img {
                height: 100%;
            }
        }
        > .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 5em;
            > .container.text {
                display: flex;
                flex-direction: column;
                gap: 3.25em;
                > .title {
                    font-size: 3.5em;
                    ${GRADIENT_TEXT(1)}
                }
                > .content {
                    word-break: keep-all;
                    > p {
                        word-wrap: break-word;
                        line-height: 1.5;
                        font-size: 2em;
                        > b {
                            font-size: 1em;
                        }
                    }
                }
            }
            .statistics {
                display: flex;
                gap: 2em;
                flex-wrap: wrap;
                font-size: 1em;
                > li {
                    padding: 1em 0;
                    width: 100%;
                    max-width: ${({isWrapped})=> isWrapped ? "100%" : "250px"};
                    display: flex;
                    gap: .5em;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    ${BOX_SHADOW}
                    border-radius: 10px;
                    transition: .2s;
                    cursor: pointer;
                    > svg {
                        font-size: 2em;
                    }
                    > .content {
                        font-size: 1.5em;
                        color: ${COLOR['main01']};
                        font-weight: 600;
                    }
                    > .title {
                        font-size: 1em;
                        font-weight: 400;
                    }
                }
                > li:hover {
                    scale: 1.05;
                }
            }
        }
    }
`;
export default StyledStatistics;