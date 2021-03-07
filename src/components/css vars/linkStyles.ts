import { css } from "styled-components";
import {grey, greyHover} from "./colors";

export const hoveredGray=css`
  &:hover {
    color: ${greyHover};
  }
`

export const styledLink = css`
  color: ${grey};
  text-decoration: none;
  font-weight: 600;
  transition: color .3s;
  ${hoveredGray};
`


