import { LiaProjectDiagramSolid } from "react-icons/lia";
import useFlexWrap from "../../../hooks/useFlexWrap";
import StyledAboutMe from "./StyledStatistics";
import { STATISTICS } from "./Data";

const Statistics = () => {
    const {isWrapped, containerRef} = useFlexWrap();
    return (
        <StyledAboutMe
            isWrapped={isWrapped}
        >
            <div className="container"
                ref={containerRef}
            >
                <div className="image">
                    <img src="image/main/aboutme.png" alt="" />
                </div>
                <div className="container">
                    <div className="container text">
                        <h1 className="title">Nothing is impossible</h1>
                        <div className="content">
                            <p>뭐든지 도전하는 <b>도전정신</b>과 하나하나의 집중하는 <b>섬세함</b>으로</p>
                            <p>앞으로 나아가는 개발자 신민석입니다.</p>
                        </div>
                    </div>
                    <ul className="container statistics">
                        {STATISTICS.map(data => 
                            <li>
                                {data.svg}
                                <p className="content">{data.content}</p>
                                <p className="title">{data.title}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </StyledAboutMe>      
    );
}
export default Statistics;