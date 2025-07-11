import styled from "@emotion/styled";
import { COLOR, CONTENT_SIZE, TITLE_SIZE } from "../styles/Variable";
import { EM, HEX, PX, SIZE } from "../types/Unit";

const FONT_SIZE = {
  verysmall: CONTENT_SIZE["verysmall"],
  small: CONTENT_SIZE["medium"],
  medium: TITLE_SIZE["verysmall"],
  large: TITLE_SIZE["medium"],
  huge: TITLE_SIZE["huge"],
};

interface ButtonProps {
  children: string;
  size?: SIZE;
  detailSize?: EM | PX;
  color: keyof typeof COLOR;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.5em 1em;
  cursor: pointer;
  font-weight: 400;
  border-radius: 5px;
  font-size: ${({ size, detailSize }) => detailSize ? detailSize : FONT_SIZE[size!]};
  ${({ className, color }) => {
    if (className == "primary") {
      return `
      color: ${COLOR['white01']};
      background-color: ${COLOR[color]};
      `;
    } else if (className == "border") {
      return `
      color: ${COLOR[color]}
      background-color: transparent;
      border: 1px solid ${COLOR[color]}
            `;
    }
  }}
`;

const PrimaryButton = ({
  children = "default",
  color = "main01",
  size = "medium",
  detailSize
}: ButtonProps) => {
  return (
    <StyledButton className="primary" detailSize={detailSize} color={color} size={size}>
      {children}
    </StyledButton>
  );
};

const BorderButton = ({
  children = "default",
  color = "main01",
  size = "medium",
  detailSize
}: ButtonProps) => {
  return (
    <StyledButton className="border" detailSize={detailSize} color={color} size={size}>
      {children}
    </StyledButton>
  );
};

const Button = {
  primary: PrimaryButton,
  border: BorderButton,
};

export default Button;
