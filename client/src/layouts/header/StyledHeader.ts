import styled from "@emotion/styled";
import { BOX_SHADOW, COLOR, GAP, GRADIENT_BACKGROUND, GRADIENT_TEXT, INNER } from "../../styles/Variable";

interface StyledHeaderProps {
    position: "fixed" | "sticky";
    color: "black" | "gradient";
}

const StyledHeader = styled.header<StyledHeaderProps>`
    width: 100%;
    z-index: 3;
    position: ${({position}) => position};
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    padding: 3em 0;
    background: transparent;
    .inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
        ${INNER}
        > .left {
            h1 {
                ${({color}) => color === "gradient" ? GRADIENT_TEXT(1) : ""};
            }
        }
        > .right {
            display: flex;
            align-items: center;
            gap: ${GAP['huge']};
            ul.menu {
                display: flex;
                gap: ${GAP['large']};
                padding: 1em 1.5em;
                border-radius: 100px;
                ${({color}) => color === "gradient" ? GRADIENT_BACKGROUND(1) : ""};
                a {
                    font-family: "Sb";
                    font-weight: 400;
                    transition: .25s;
                }
                a:not(:hover) {
                    color: ${({color}) => color === "gradient" ?  COLOR.white01 :  ""}
                }
            }
        }

    }
`;

export default StyledHeader;  