import styled from "@emotion/styled";
import { GAP } from "../../styles/Variable";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const StyledUtil = styled.div`
    display: flex;
    gap: ${GAP['medium']};
    font-size: 20px;
`;
const Util = () => {
    return (
        <StyledUtil>
            <Link to="/"><Button.border color="achromatic09" detailSize="1.15em">Join</Button.border></Link>
            <Link to="/"><Button.primary detailSize="1.15em">Sign Up</Button.primary></Link>
        </StyledUtil>
    );
}
export default Util;