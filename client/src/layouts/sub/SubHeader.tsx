import Logo from "../../components/Logo";
import { COLOR, GAP, GRADIENT_BACKGROUND, INNER, INNER_PADDING } from "../../styles/Variable";
import styled from "@emotion/styled";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    width: 100%;
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    padding: 3em 0;
    .inner {
        width: 100%;
        display: flex;
        justify-content: space-between;
        ${INNER}
        > .left {

        }
        > .right {
            display: flex;
            align-items: center;
            gap: ${GAP['huge']};
            ul.menu {
                ${GRADIENT_BACKGROUND};
                padding: .5em 1em;
                border-radius: 100px;
                display: flex;
                gap: ${GAP['large']};
                a {
                    /* text-shadow: 0 4px 4px rgba(0, 0, 0, .25); */
                    font-family: "Sb";
                    font-weight: 400;
                    transition: .3s;
                }
                a:not(:hover) {
                    color: ${COLOR.white01};
                }
            }
        }
    }
`;

const SubHeader = () => {
    
    return (
        <StyledHeader>
            <div className="inner">
                <motion.div className="left">
                    <Logo color="gradient" />
                </motion.div>
                <div className="right">
                    <ul className="menu">
                        <li><Link to="#">About Me</Link></li>
                        <li><Link to="#">Project</Link></li>
                        <li><Link to="#">Skills</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </StyledHeader>
    );
};

export default SubHeader;