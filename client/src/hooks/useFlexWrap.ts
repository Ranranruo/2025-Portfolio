import { useEffect, useRef, useState } from "react";

const useFlexWrap = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isWrapped, setWrapped] = useState(false);

    useEffect(() => {
        const checkWrap = () => {
            const container = containerRef.current;
            if(container === null) return;

            const children = [...container.children] as HTMLElement[];
            const top = children[0].offsetTop;
            
            const wrapped = children.some((child) => child.offsetTop != top);

            setWrapped(wrapped);
        }
        const resizeObserver = new ResizeObserver(checkWrap);
        if(containerRef !== null && containerRef.current !== null) resizeObserver.observe(containerRef.current);
        checkWrap();

        return () => {
            resizeObserver.disconnect();
        }
    }, []);

    return {isWrapped, containerRef};
}

export default useFlexWrap;