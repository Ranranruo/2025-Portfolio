import Logo from "../../components/Logo";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import StyledHeader from "./StyledHeader";

interface HeaderProps {
    position?: "fixed" | "sticky";
    color?: "black" | "gradient";
}

const Header = ({
    position = "fixed",
    color = "black",
}: HeaderProps) => {
    return (
        <StyledHeader
            position={position}
            color={color}
            className={color}
        >
            <div className="inner">
                <motion.div className="left">
                    <Logo />
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

export default Header;