import { motion } from "framer-motion";
import { SLIDE } from "./Data";
import StyledSlide from "./StyledSlide";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../../db/Supabase";
import { Skills } from "../../Skill";
import useProjectApi from "../../../api/ProjectApi";



interface SlideItem {
    id: number;
    image: string | null;
    isMobile: boolean;
}

type SlideGroup = SlideItem[];

const Slide = () => {
    const getProjects = useProjectApi((state) => state.getProjects);
    const [x, setX] = useState(0);
    const [slides, setSlides] = useState<SlideGroup[]>(SLIDE);
    const slideRefs = [
        useRef<HTMLLIElement | null>(null), 
        useRef<HTMLLIElement | null>(null),
        useRef<HTMLLIElement | null>(null)
    ];
    const fetchData = async () => {
       const newSlides: SlideGroup[] = [[], [], []];
        try {
            const projects = await getProjects();
            if (!projects) {
                console.log("No projects found.");
                return; // 함수 실행 중단
            }

            // 3. projects 데이터로 newSlides 배열을 채웁니다.
            projects.forEach((data, index) => {
                // 4. 인덱스 분배 로직 수정:
                // 기존 로직은 index 0, 2, 4, 6... 이 모두 1번 배열로 가는 등 분배가 고르지 않습니다.
                // index % 3을 사용하면 0, 1, 2, 0, 1, 2... 순서로 고르게 분배됩니다.
                const currnetIndex = index % 3;

                newSlides[currnetIndex].push({
                    id: data.id,
                    image: data.titleImage,
                    isMobile: data.device === "mobile" // '==' 대신 '===' 사용 권장
                });
            });

            // 5. 데이터가 *채워진* newSlides 배열로 state를 설정합니다.
            setSlides(newSlides);

        } catch (err) {
            console.error("An unexpected error occurred in fetchData:", err);
        }
    }
    useEffect(() => {
        setInterval(() => {
            setX(prev => {return prev + 0.1;});
        }, 10);
        fetchData();
    }, []);
    useEffect(() => {
        slideRefs.forEach((el, idx) => {
            let info = el.current!.getBoundingClientRect();
            if((el.current!.clientWidth + info.x) - window.innerWidth <= 0) {
                setSlides(prev => {
                    const newSlide = [...prev]; // 얕은 복사
                    newSlide[idx] = [...newSlide[idx], ...newSlide[idx]]; // 해당 인덱스만 깊은 복사
                    return newSlide;
                });
            }
        });
    }, [x]);
    return (
        <StyledSlide>
            <div className="back-drop"></div>
            <div className="container">
                <div className="container title">
                    <h1>Projects</h1>
                    <h2>A list of projects I’ve worked on</h2>
                </div>
                <ul className="container slide">
                    {slides.map((group, idx) => 
                    <motion.li
                        key={idx}
                        ref={slideRefs[idx]}
                        initial={{left: 0}}
                        animate={{left: x * -(idx + 3)}}
                        transition={{duration: .1}}
                    >
                        <ul>
                            {group.map((data, idx) => 
                            <li key={idx} className={data.isMobile ? "mobile" : ""}>
                                <Link to={`/projects/${data.id}`}>
                                    {data.image ? <img src={data.image} alt=""/> : ''}
                                </Link>
                            </li>
                            )}
                        </ul>
                    </motion.li>
                    )}
                </ul>
            </div>
        </StyledSlide>
    );
}

export default Slide;