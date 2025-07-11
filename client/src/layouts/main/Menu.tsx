import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { GAP } from "../../styles/Variable";

const StyledMenu = styled.ul`
    display: flex;
    gap: ${GAP['large']};
    a {
        /* color: #fff; */
        /* text-shadow: 0 4px 4px rgba(0, 0, 0, .25); */
        font-family: "Sb";
        font-weight: 400;
    }
`;

const Menu = () => {
    return (
        <StyledMenu>
            <li><Link to="#">About Me</Link></li>
            <li><Link to="#">Project</Link></li>
            <li><Link to="#">Skills</Link></li>
            <li><Link to="#">Contact</Link></li>
        </StyledMenu>      
    );
}

export default Menu;