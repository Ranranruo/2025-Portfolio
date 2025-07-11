import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import StyledVisual from "./StyledVisual";
import FadeWriter from "../../motion/FadeWriter";
import { delay, useAnimation } from "framer-motion";
import useFlexWrap from "../../../hooks/useFlexWrap";

const backgroundImages = [
    "image/main/database.png",
    "image/main/server.png",
    "image/main/frontend.png",
    "image/main/design.png"
]
const slideVariants = {
    step1: {
        zIndex: 1,
        opacity: 0,
        scale: .3,
        top: "-300px",
        right: "-500px",
        filter: "blur(10px)",
    },
    step2: {
        zIndex: 1,
        opacity: .3,
        scale: .5,
        top: "-200px",
        right: "-350px",
        filter: "blur(10px)",
    },

    step3: {
        transition: {
            type: "spring",
            bounce: .3,
            duration: 1
        },
        zIndex: 2,
        opacity: 1,
        top: 0,
        right: 0,
        filter: "blur(0px)",
        scale: 1,
    },

    step4: {
        zIndex: 1,
        opacity: 0,
        top: "200px",
        scale: 1.1,
        right: "400px",
    }
}
const steps = ["step1", "step2", "step3", "step4"];
const texts = ["frontend", "backend", "database", "design"];
const Visual = () => {
    const {isWrapped, containerRef} = useFlexWrap();
    const [frame, setFrame] = useState(0);
    const [showAboutBtn, setAboutBtn] = useState(false);
    const [showContactBtn, setContactBtn] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((prev) => (prev + 1) % (steps.length));
        }, 7000);
        setTimeout(() => setAboutBtn(true), 1000);
        setTimeout(() => setContactBtn(true), 1500);

        return () => clearInterval(interval);
    }, []);
    return (
        <StyledVisual
            isWrapped={isWrapped}
        >
            <div className="container"
                ref={containerRef}
            >
                <div className="container">
                    <div className="texts">
                        <div>
                            <FadeWriter text="Hello I'm" />
                            <FadeWriter text="Min Seok Shin" />
                        </div>
                        <div>
                            <FadeWriter text="Learning about" />
                            <FadeWriter key={frame} text={texts[frame]} />
                        </div>
                    </div>
                    <div className="buttons">
                        {showAboutBtn && <motion.a
                            href="#"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                                opacity: 1, 
                                scale: 1, 
                            }}
                            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }} 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <span>
                                AboutMe
                            </span>
                        </motion.a>}
                        {showContactBtn && <motion.a
                            href="#"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                                opacity: 1, 
                                scale: 1, 
                            }}
                            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }} 
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <span>
                                Contact
                            </span>
                        </motion.a>}
                        <a style={{ opacity: 0 }}><span>aasdassd</span></a>
                    </div>
                </div>
                <div className="content">
                    <div className="back-drop"></div>
                    <ul>
                        {backgroundImages.map((img, index) => {
                            const currentStep = (frame + index) % steps.length;
                            return (
                                <motion.li
                                    key={index}
                                    variants={slideVariants}
                                    animate={steps[currentStep]}
                                    transition={{
                                        duration: .3
                                    }}
                                    initial={steps[index]}
                                    style={{
                                        background: `url(${img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </StyledVisual>
    );
}

export default Visual;