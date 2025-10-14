import { EM, HEX, PX, SIZE } from "../types/Unit";

// inner
export const INNER_PX = "1440px";
export const INNER_PADDING = "30px";

const GRADIENT = (opacity: number) => `linear-gradient(120deg, rgba(246, 211, 101, ${opacity}) 0%, rgba(253, 160, 133, ${opacity}) 100%)`;
export const GRADIENT_BACKGROUND = (opacity: number) => `background-image: ${GRADIENT(opacity)};`;
export const GRADIENT_TEXT = (opacity: number) => `
    ${GRADIENT_BACKGROUND(opacity)}
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;
export const GRADIENT_SVG = `
`;

export const BOX_SHADOW = `
    box-shadow: 5px 5px 30px rgba(0,0,0,.1);
`;
export const GRADIENT_BORDER = `
    background-image: linear-gradient(#fff, #fff), ${GRADIENT};
    background-origin: border-box;
    background-clip: content-box, border-box;
`;
export const INNER = `
    width: 100%;
    max-width: ${INNER_PX};
    padding: 0 ${INNER_PADDING};
    margin: 0 auto;
`

// color
export const COLOR = {
    main01: "#FFB84D",
    main02: "#FEC164",
    white01: "#fff",         // 가장 밝음
    white02: "#F9FAFB",
    white03: "#F4F4F6",
    background01: "#ECECEE", 
    gray01: "#C1C0BA",       // gray 계열
    black01: "#150F0B",
    backDrop01: "#ffe9d6",
    backDrop02: "#ffe0c9"

} as const;


export const GAP: Record<SIZE, PX> = {
    verysmall: "5px",
    small: "10px",
    medium: "20px",
    large: "30px",
    huge: "40px"
} as const;

// fontSize
/**
 * @property verysmall -> .75em  -> 12px
 * @property small     -> .88em  -> 14px
 * @property medium    -> 1em    -> 16px
 * @property large     -> 1.13em -> 18px
 * @property huge      -> 1.5em  -> 24px
 */
export const CONTENT_SIZE: Record<SIZE, EM> = {
    verysmall: ".75em",
    small: ".88em",
    medium: "1em",
    large: "1.13em",
    huge: "1.5em"
} as const;

/**
 * @property verysmall -> 1.25em  -> 20px
 * @property small     -> 1.50em  -> 24px
 * @property medium    -> 1.875em -> 30px
 * @property large     ->  2.25em -> 36px
 * @property huge      -> 2.625em -> 42px
 */
export const TITLE_SIZE: Record<SIZE, EM> = {
    verysmall: "1.25em",
    small: "1.50em",
    medium: "1.875em",
    large: "2.25em",
    huge: "2.625em"
} as const;