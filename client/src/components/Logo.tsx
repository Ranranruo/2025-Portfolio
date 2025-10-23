
import { EM, SIZE } from "../types/Unit";
import { GAP, GRADIENT_TEXT, TITLE_SIZE } from "../styles/Variable";
import styled from "@emotion/styled";

const IMG_SIZE: Record<SIZE, EM> = {
  verysmall: ".1em",
  small: ".1em",
  medium: "2em",
  large: ".1em",
  huge: ".1em",
} as const;

interface LogoProps {
  children?: string;
  size?: SIZE;
  color?: 'gradient' | 'black';
}

interface StyledLogoProps {
  size: SIZE;
  color: 'gradient' | 'black';
}

const StyledLogo = styled.a<StyledLogoProps>`
  display: flex;
  font-weight: 900;
  gap: ${GAP['small']};
  > img { height: ${({size}) => IMG_SIZE[size]}; }
  > h1 { 
    font-family: 'Sb';
    font-weight: 900;
    font-size: ${({size}) => TITLE_SIZE[size]}; 
    ${({color})=>color==='gradient'?GRADIENT_TEXT(1):''};
  }`;

const Logo = ({
  children = "Portfolio",
  size = "medium",
  color = "black"
}: LogoProps) => {
  return (
    <StyledLogo
      href="/"
      size={size}
      color={color}
      >
      {/* <img src="images/logo.svg" /> */}
      <h1>{children}</h1>
    </StyledLogo>
  );
};

export default Logo;
