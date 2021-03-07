import {css} from "styled-components";
import {grey, greyHover} from "./colors";

export const navStyle = css`
  font-size: 40px;
  color: ${grey};
  cursor: pointer;
  transition: color .3s;
  &:hover{
    color: ${greyHover};
  }
`