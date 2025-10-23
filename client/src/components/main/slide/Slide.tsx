import { motion } from "framer-motion";
import { SLIDE } from "./Data";
import StyledSlide from "./StyledSlide";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface SlideItem {
    id: number;
    image: string;
    isMobile: boolean;
}

type SlideGroup = SlideItem[];

const Slide = () => {
    const [x, setX] = useState(0);
    const [slides, setSlides] = useState<SlideGroup[]>(SLIDE);
    const slideRefs = [
        useRef<HTMLLIElement | null>(null), 
        useRef<HTMLLIElement | null>(null),
        useRef<HTMLLIElement | null>(null)
    ];
    useEffect(() => {
        setInterval(() => {
            setX(prev => {return prev + 0.1;});
        }, 10);
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
                                <Link to={"/"}>
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