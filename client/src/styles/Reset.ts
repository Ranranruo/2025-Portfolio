import { css } from "@emotion/react";

const reset = css`
  :root{ font-size: 16px; }
  @media (max-width: 1439px) { :root{ font-size: 14px } }
  @media (max-width: 1279px) { :root{ font-size: 12px } }
  // @media (min-width: 1201px) { :root{ font-size: 14px } }
  body {
    // background-color: #ECECEE;
    color: #333;
    font-family: 'Sb';
  }
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    color: inherit;
    border: none;
    background-color: transparent;
    outline: none;
    font-family: inherit;
    box-sizing: border-box;
  }
  section {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export default reset;