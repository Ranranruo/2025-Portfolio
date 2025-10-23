import styled from "@emotion/styled";
import { BOX_SHADOW, COLOR, GAP, GRADIENT_BACKGROUND, GRADIENT_TEXT, INNER } from "../../styles/Variable";

interface StyledHeaderProps {
    type: "main" | "sub";
}

const StyledHeader = styled.header<StyledHeaderProps>`
    width: 100%;
    z-index: 3;
    position: ${({type}) => type === "main" ? "fixed" : "sticky"};
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    padding: ${({type})=> type === "main" ? "3em" : "1em"} 0;
    background: ${({type})=> type === "main" ? "transparent" : COLOR.white01};
    border-bottom: ${({type})=>type === "sub" ? `2px solid rgb(243,244,246)` : ""};
    .inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
        ${INNER}
        > .left {
            display: flex;
            align-items: ${({type}) => type === "main" ? "start" : "center"};
            h1 {
                ${({type})=> type === "sub" ? GRADIENT_TEXT(1) : ""};
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
                a {
                    font-family: "Sb";
                    font-weight: 400;
                    transition: .25s;
                }
                a:hover{
                    background: "";
                    color: "#000";
                    background-clip: "";
                }
            }
        }

    }
`;

export default StyledHeader;  