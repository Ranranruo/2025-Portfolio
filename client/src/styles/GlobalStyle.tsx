import { Global } from "@emotion/react";
import reset from "./Reset";
import font from "./Font";

const GlobalStyles = () => {
  return (
      <Global styles={[reset, font]}/>
  );
};

export default GlobalStyles;