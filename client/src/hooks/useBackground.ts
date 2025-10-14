import { useEffect } from "react"
/**
 * set background of body
 * @param background
 */
const useBackground = (background: string) => {
    useEffect(()=> {
        document.querySelector("body")!.style.background = background;
        return () => {document.querySelector("body")!.style.background = ""};
    }, [])
}
export default useBackground;