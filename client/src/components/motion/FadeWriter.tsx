import {motion} from "framer-motion";

interface FadeWriterProps {
    text: string
    duration?: number,
    delay?: number
}

const FadeWriter = ({
    text,
    duration = .8,
    delay = .1,
    ...rest
}: FadeWriterProps) => {
    const splitText = text.split(" ");
    return (
        <p
            {...rest}
        >
            {splitText.map((text, index) => <motion.span
                style={{ display: 'inline-block' }}
                key={index}
                initial={{
                    opacity: 0,
                    y: 10
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration,
                    delay: (index + 1) * delay,
                    ease: "easeOut"
                }}
            >
                {text}&nbsp;
            </motion.span>)}
        </p>
    );
}

export default FadeWriter;