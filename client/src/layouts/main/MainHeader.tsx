import Logo from "../../components/Logo";
import Menu from "./Menu";
import { GAP, INNER, INNER_PADDING } from "../../styles/Variable";
import styled from "@emotion/styled";
import { motion } from "motion/react";

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
        }
    }
`;

const MainHeader = () => {
    
    return (
        <StyledHeader>
            <div className="inner">
                <motion.div className="left">
                    <Logo />
                </motion.div>
                <div className="right">
                    <Menu />
                </div>
            </div>
        </StyledHeader>
    );
};

export default MainHeader;